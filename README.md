# Another Home — Finance Service

Handles hostel fees: invoices, payments, and automatic reminders for payments that are due soon or overdue.

Part of [Another Home](https://github.com/another-home-dev). Reached through the API gateway at `/api/v1/finance`.

## What it does

- **Invoices.** Each invoice belongs to one student and has an amount, a description and a due date. It is `Pending` or `Paid`. A pending invoice past its due date is reported as `Overdue`.
- **Payments.** Recording a payment against an invoice marks it `Paid`, stores the payment and its reference number, and sends the student a "Payment received" alert.
- **Reminders.** Every day at 9:00 AM a scheduled job finds unpaid invoices due within 3 days, or already overdue. It sends each student one "Payment due soon" or "Payment overdue" alert per invoice.

Alerts go through the [Notification service](https://github.com/another-home-dev/another-home-notifications). A failed alert is logged and never blocks the payment.

## API

Paths are relative to `/api/v1/finance`.

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/invoices` | All invoices (warden dashboard) |
| GET | `/invoices/:studentId` | One student's invoices (mobile app) |
| POST | `/invoices` | Create an invoice: `{ studentId, amount, dueDate, description }` |
| POST | `/payments` | Record a payment: `{ invoiceId, amount, referenceNumber? }` |
| GET | `/health` | Health check |

`studentId` is the accommodation service's student ID, not the Asgardeo user ID.

Interactive docs: `/api/docs` on the gateway, or `http://localhost:4003/api/docs` when running locally.

## Configuration

| Variable | Purpose | Default |
| --- | --- | --- |
| `PORT` | Port to listen on | `4003` |
| `DB_HOST`, `DB_PORT` | MySQL server | `localhost`, `3308` |
| `DB_USERNAME`, `DB_PASSWORD` | MySQL credentials | |
| `DB_DATABASE` | Database name | `another_home_finance` |
| `NOTIFICATION_SERVICE_URL` | Where to send student alerts | `http://notification:4004` |
| `CONSUL_HOST`, `CONSUL_PORT` | Service registry to register with | |
| `SERVICE_ADDRESS` | Address this service registers under in Consul | |

## Run locally

The easiest way is to start the whole system with `docker compose up --build` from [another-home-infra](https://github.com/another-home-dev/anotherhome-infrastructure). Its README shows how to clone every repository into the folder names it expects.

To run this service on its own, with a MySQL server available:

```bash
npm install
npm run start:dev
```

## Tests

```bash
npm test   # unit tests: create invoice, log payment, send reminders
```

## Project structure

```
src/
├── domain/
│   ├── entities/          Invoice, Payment
│   └── ports/             repository interfaces
├── application/
│   └── use-cases/         create invoice, get invoices, log payment, send reminders
├── infrastructure/
│   ├── controllers/       HTTP endpoints
│   ├── database/          TypeORM entities and repositories
│   ├── dto/               request validation
│   └── schedulers/        daily 9 AM reminder job
└── common/
    └── notification-client.ts
```

## Deployment

`cloudbuild.yaml` runs on every push to `main`: tests, Docker build, push to Artifact Registry, then a rolling update of the `finance` deployment on GKE.

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinanceController } from './infrastructure/controllers/finance.controller';
import { GetInvoicesUseCase } from './application/use-cases/get-invoices.usecase';
import { CreateInvoiceUseCase } from './application/use-cases/create-invoice.usecase';
import { LogPaymentUseCase } from './application/use-cases/log-payment.usecase';
import { SendPaymentRemindersUseCase } from './application/use-cases/send-payment-reminders.usecase';
import { PaymentReminderScheduler } from './infrastructure/schedulers/payment-reminder.scheduler';
import { INVOICE_REPOSITORY } from './domain/ports/invoice.repository.interface';
import { InvoiceRepository } from './infrastructure/database/repositories/invoice.repository';
import { PAYMENT_REPOSITORY } from './domain/ports/payment.repository.interface';
import { PaymentRepository } from './infrastructure/database/repositories/payment.repository';
import { InvoiceOrmEntity } from './infrastructure/database/entities/invoice.orm-entity';
import { PaymentOrmEntity } from './infrastructure/database/entities/payment.orm-entity';

@Module({
    imports: [TypeOrmModule.forFeature([InvoiceOrmEntity, PaymentOrmEntity])],
    controllers: [FinanceController],
    providers: [
        GetInvoicesUseCase,
        CreateInvoiceUseCase,
        LogPaymentUseCase,
        SendPaymentRemindersUseCase,
        PaymentReminderScheduler,
        {
            provide: INVOICE_REPOSITORY,
            useClass: InvoiceRepository,
        },
        {
            provide: PAYMENT_REPOSITORY,
            useClass: PaymentRepository,
        },
    ],
    exports: [GetInvoicesUseCase, LogPaymentUseCase],
})
export class FinanceModule {}

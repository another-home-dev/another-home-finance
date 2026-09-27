import { Injectable, Inject } from '@nestjs/common';
import { INVOICE_REPOSITORY } from '../../domain/ports/invoice.repository.interface';
import type { IInvoiceRepository } from '../../domain/ports/invoice.repository.interface';
import { notifyUser } from '../../common/notification-client';

/** How far ahead of the due date a student is warned. */
const REMINDER_WINDOW_DAYS = 3;

/**
 * Run daily by PaymentReminderScheduler. Notifies students once per invoice,
 * either that payment is due soon or that it's now overdue, then marks the
 * invoice so it's never reminded twice.
 */
@Injectable()
export class SendPaymentRemindersUseCase {
    constructor(
        @Inject(INVOICE_REPOSITORY)
        private readonly invoiceRepository: IInvoiceRepository,
    ) {}

    async execute(): Promise<number> {
        const now = new Date();
        const cutoff = new Date(now);
        cutoff.setDate(cutoff.getDate() + REMINDER_WINDOW_DAYS);

        const dueInvoices = await this.invoiceRepository.findDueForReminder(cutoff);

        for (const invoice of dueInvoices) {
            const isOverdue = invoice.dueDate < now;
            const dateLabel = invoice.dueDate.toLocaleDateString('en-LK', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            });

            void notifyUser(
                invoice.studentId,
                isOverdue ? 'Payment overdue' : 'Payment due soon',
                isOverdue
                    ? `Your payment of Rs. ${invoice.amount} for "${invoice.description}" was due on ${dateLabel} and is still unpaid.`
                    : `Your payment of Rs. ${invoice.amount} for "${invoice.description}" is due on ${dateLabel}.`,
            );

            invoice.markReminderSent();
            await this.invoiceRepository.save(invoice);
        }

        return dueInvoices.length;
    }
}

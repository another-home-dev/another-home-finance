import { Invoice } from '../entities/Invoice';

export const INVOICE_REPOSITORY = Symbol('INVOICE_REPOSITORY');

export interface IInvoiceRepository {
    findAll(): Promise<Invoice[]>;
    findById(id: string): Promise<Invoice | null>;
    findByStudentId(studentId: string): Promise<Invoice[]>;
    /**
     * Pending invoices that are either already overdue or due on/before `cutoff`,
     * and haven't had a reminder sent yet. Used by the daily reminder job.
     */
    findDueForReminder(cutoff: Date): Promise<Invoice[]>;
    save(invoice: Invoice): Promise<Invoice>;
}

import { Invoice } from '../entities/Invoice';

export const INVOICE_REPOSITORY = Symbol('INVOICE_REPOSITORY');

export interface IInvoiceRepository {
    findAll(): Promise<Invoice[]>;
    findById(id: string): Promise<Invoice | null>;
    findByStudentId(studentId: string): Promise<Invoice[]>;
    save(invoice: Invoice): Promise<Invoice>;
}

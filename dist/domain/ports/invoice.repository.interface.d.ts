import { Invoice } from '../entities/Invoice';
export declare const INVOICE_REPOSITORY: unique symbol;
export interface IInvoiceRepository {
    findAll(): Promise<Invoice[]>;
    findById(id: string): Promise<Invoice | null>;
    save(invoice: Invoice): Promise<Invoice>;
}

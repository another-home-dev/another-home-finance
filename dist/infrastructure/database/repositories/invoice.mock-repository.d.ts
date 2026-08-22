import { IInvoiceRepository } from '../../../domain/ports/invoice.repository.interface';
import { Invoice } from '../../../domain/entities/Invoice';
export declare class InvoiceMockRepository implements IInvoiceRepository {
    private invoices;
    findAll(): Promise<Invoice[]>;
    findById(id: string): Promise<Invoice | null>;
    save(invoice: Invoice): Promise<Invoice>;
}

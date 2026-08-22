import { Injectable } from '@nestjs/common';
import { IInvoiceRepository } from '../../../domain/ports/invoice.repository.interface';
import { Invoice } from '../../../domain/entities/Invoice';

@Injectable()
export class InvoiceMockRepository implements IInvoiceRepository {
    private invoices: Invoice[] = [
        new Invoice('inv-1', 5000, 'Pending', 'student-123'),
        new Invoice('inv-2', 7500, 'Pending', 'student-456'),
    ];

    async findAll(): Promise<Invoice[]> {
        return this.invoices;
    }

    async findById(id: string): Promise<Invoice | null> {
        const invoice = this.invoices.find(inv => inv.invoiceId === id);
        return invoice || null;
    }

    async save(invoice: Invoice): Promise<Invoice> {
        const index = this.invoices.findIndex(inv => inv.invoiceId === invoice.invoiceId);
        if (index >= 0) {
            this.invoices[index] = invoice;
        } else {
            this.invoices.push(invoice);
        }
        return invoice;
    }
}

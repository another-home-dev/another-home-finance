import { Invoice } from '../../../domain/entities/Invoice';
import { InvoiceOrmEntity } from '../entities/invoice.orm-entity';

export class InvoiceMapper {
    static toDomain(raw: InvoiceOrmEntity): Invoice {
        return new Invoice(
            raw.invoiceId,
            Number(raw.amount),
            raw.status,
            raw.studentId,
            new Date(raw.dueDate),
            raw.description,
            raw.createdAt,
            raw.paidAt,
        );
    }

    static toPersistence(domainInvoice: Invoice): InvoiceOrmEntity {
        const ormEntity = new InvoiceOrmEntity();
        ormEntity.invoiceId = domainInvoice.invoiceId;
        ormEntity.amount = domainInvoice.amount;
        ormEntity.status = domainInvoice.status;
        ormEntity.studentId = domainInvoice.studentId;
        ormEntity.dueDate = domainInvoice.dueDate;
        ormEntity.description = domainInvoice.description;
        ormEntity.paidAt = domainInvoice.paidAt;
        return ormEntity;
    }
}

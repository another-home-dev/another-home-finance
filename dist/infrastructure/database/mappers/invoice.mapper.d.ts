import { Invoice } from '../../../domain/entities/Invoice';
import { InvoiceOrmEntity } from '../entities/invoice.orm-entity';
export declare class InvoiceMapper {
    static toDomain(raw: InvoiceOrmEntity): Invoice;
    static toPersistence(domainInvoice: Invoice): InvoiceOrmEntity;
}

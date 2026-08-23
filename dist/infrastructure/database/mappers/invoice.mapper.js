"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceMapper = void 0;
const Invoice_1 = require("../../../domain/entities/Invoice");
const invoice_orm_entity_1 = require("../entities/invoice.orm-entity");
class InvoiceMapper {
    static toDomain(raw) {
        return new Invoice_1.Invoice(raw.invoiceId, Number(raw.amount), raw.status, raw.studentId, new Date(raw.dueDate), raw.description, raw.createdAt, raw.paidAt);
    }
    static toPersistence(domainInvoice) {
        const ormEntity = new invoice_orm_entity_1.InvoiceOrmEntity();
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
exports.InvoiceMapper = InvoiceMapper;
//# sourceMappingURL=invoice.mapper.js.map
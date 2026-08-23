"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMapper = void 0;
const Payment_1 = require("../../../domain/entities/Payment");
const payment_orm_entity_1 = require("../entities/payment.orm-entity");
class PaymentMapper {
    static toDomain(raw) {
        return new Payment_1.Payment(raw.paymentId, raw.invoiceId, Number(raw.amount), raw.paymentDate, raw.status, raw.referenceNumber);
    }
    static toPersistence(domainPayment) {
        const ormEntity = new payment_orm_entity_1.PaymentOrmEntity();
        ormEntity.paymentId = domainPayment.paymentId;
        ormEntity.invoiceId = domainPayment.invoiceId;
        ormEntity.amount = domainPayment.amount;
        ormEntity.paymentDate = domainPayment.paymentDate;
        ormEntity.status = domainPayment.status;
        ormEntity.referenceNumber = domainPayment.referenceNumber;
        return ormEntity;
    }
}
exports.PaymentMapper = PaymentMapper;
//# sourceMappingURL=payment.mapper.js.map
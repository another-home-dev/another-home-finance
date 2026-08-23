import { Payment } from '../../../domain/entities/Payment';
import { PaymentOrmEntity } from '../entities/payment.orm-entity';

export class PaymentMapper {
    static toDomain(raw: PaymentOrmEntity): Payment {
        return new Payment(
            raw.paymentId,
            raw.invoiceId,
            Number(raw.amount),
            raw.paymentDate,
            raw.status,
            raw.referenceNumber,
        );
    }

    static toPersistence(domainPayment: Payment): PaymentOrmEntity {
        const ormEntity = new PaymentOrmEntity();
        ormEntity.paymentId = domainPayment.paymentId;
        ormEntity.invoiceId = domainPayment.invoiceId;
        ormEntity.amount = domainPayment.amount;
        ormEntity.paymentDate = domainPayment.paymentDate;
        ormEntity.status = domainPayment.status;
        ormEntity.referenceNumber = domainPayment.referenceNumber;
        return ormEntity;
    }
}

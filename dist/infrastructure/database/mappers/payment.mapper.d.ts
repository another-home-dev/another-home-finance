import { Payment } from '../../../domain/entities/Payment';
import { PaymentOrmEntity } from '../entities/payment.orm-entity';
export declare class PaymentMapper {
    static toDomain(raw: PaymentOrmEntity): Payment;
    static toPersistence(domainPayment: Payment): PaymentOrmEntity;
}

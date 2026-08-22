import { IPaymentRepository } from '../../../domain/ports/payment.repository.interface';
import { Payment } from '../../../domain/entities/Payment';
export declare class PaymentMockRepository implements IPaymentRepository {
    private payments;
    save(payment: Payment): Promise<Payment>;
}

import { Payment } from '../entities/Payment';
export declare const PAYMENT_REPOSITORY: unique symbol;
export interface IPaymentRepository {
    save(payment: Payment): Promise<Payment>;
}

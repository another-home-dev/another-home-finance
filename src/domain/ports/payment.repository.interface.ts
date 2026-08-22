import { Payment } from '../entities/Payment';

export const PAYMENT_REPOSITORY = Symbol('PAYMENT_REPOSITORY');

export interface IPaymentRepository {
    save(payment: Payment): Promise<Payment>;
}

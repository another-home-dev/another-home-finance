import { Injectable } from '@nestjs/common';
import { IPaymentRepository } from '../../../domain/ports/payment.repository.interface';
import { Payment } from '../../../domain/entities/Payment';

@Injectable()
export class PaymentMockRepository implements IPaymentRepository {
    private payments: Payment[] = [];

    async save(payment: Payment): Promise<Payment> {
        this.payments.push(payment);
        return payment;
    }
}

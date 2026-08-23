import { Repository } from 'typeorm';
import { IPaymentRepository } from '../../../domain/ports/payment.repository.interface';
import { Payment } from '../../../domain/entities/Payment';
import { PaymentOrmEntity } from '../entities/payment.orm-entity';
export declare class PaymentRepository implements IPaymentRepository {
    private readonly typeOrmRepository;
    constructor(typeOrmRepository: Repository<PaymentOrmEntity>);
    save(payment: Payment): Promise<Payment>;
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaymentRepository } from '../../../domain/ports/payment.repository.interface';
import { Payment } from '../../../domain/entities/Payment';
import { PaymentOrmEntity } from '../entities/payment.orm-entity';
import { PaymentMapper } from '../mappers/payment.mapper';

@Injectable()
export class PaymentRepository implements IPaymentRepository {
    constructor(
        @InjectRepository(PaymentOrmEntity)
        private readonly typeOrmRepository: Repository<PaymentOrmEntity>,
    ) {}

    async save(payment: Payment): Promise<Payment> {
        const ormEntity = PaymentMapper.toPersistence(payment);
        const savedEntity = await this.typeOrmRepository.save(ormEntity);
        return PaymentMapper.toDomain(savedEntity);
    }
}

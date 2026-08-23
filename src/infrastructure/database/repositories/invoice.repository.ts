import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IInvoiceRepository } from '../../../domain/ports/invoice.repository.interface';
import { Invoice } from '../../../domain/entities/Invoice';
import { InvoiceOrmEntity } from '../entities/invoice.orm-entity';
import { InvoiceMapper } from '../mappers/invoice.mapper';

@Injectable()
export class InvoiceRepository implements IInvoiceRepository {
    constructor(
        @InjectRepository(InvoiceOrmEntity)
        private readonly typeOrmRepository: Repository<InvoiceOrmEntity>,
    ) {}

    async findAll(): Promise<Invoice[]> {
        const ormEntities = await this.typeOrmRepository.find();
        return ormEntities.map((entity) => InvoiceMapper.toDomain(entity));
    }

    async findById(id: string): Promise<Invoice | null> {
        const ormEntity = await this.typeOrmRepository.findOne({ where: { invoiceId: id } });
        if (!ormEntity) return null;
        return InvoiceMapper.toDomain(ormEntity);
    }

    async findByStudentId(studentId: string): Promise<Invoice[]> {
        const ormEntities = await this.typeOrmRepository.find({ where: { studentId } });
        return ormEntities.map((entity) => InvoiceMapper.toDomain(entity));
    }

    async save(invoice: Invoice): Promise<Invoice> {
        const ormEntity = InvoiceMapper.toPersistence(invoice);
        const savedEntity = await this.typeOrmRepository.save(ormEntity);
        return InvoiceMapper.toDomain(savedEntity);
    }
}

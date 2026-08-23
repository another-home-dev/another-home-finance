import { Repository } from 'typeorm';
import { IInvoiceRepository } from '../../../domain/ports/invoice.repository.interface';
import { Invoice } from '../../../domain/entities/Invoice';
import { InvoiceOrmEntity } from '../entities/invoice.orm-entity';
export declare class InvoiceRepository implements IInvoiceRepository {
    private readonly typeOrmRepository;
    constructor(typeOrmRepository: Repository<InvoiceOrmEntity>);
    findAll(): Promise<Invoice[]>;
    findById(id: string): Promise<Invoice | null>;
    findByStudentId(studentId: string): Promise<Invoice[]>;
    save(invoice: Invoice): Promise<Invoice>;
}

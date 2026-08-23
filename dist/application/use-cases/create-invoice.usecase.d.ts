import type { IInvoiceRepository } from '../../domain/ports/invoice.repository.interface';
import { Invoice } from '../../domain/entities/Invoice';
import { CreateInvoiceDto } from '../../infrastructure/dto/create-invoice.dto';
export declare class CreateInvoiceUseCase {
    private readonly invoiceRepository;
    constructor(invoiceRepository: IInvoiceRepository);
    execute(dto: CreateInvoiceDto): Promise<Invoice>;
}

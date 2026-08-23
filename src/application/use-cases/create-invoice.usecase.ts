import { Injectable, Inject } from '@nestjs/common';
import { INVOICE_REPOSITORY } from '../../domain/ports/invoice.repository.interface';
import type { IInvoiceRepository } from '../../domain/ports/invoice.repository.interface';
import { Invoice } from '../../domain/entities/Invoice';
import { CreateInvoiceDto } from '../../infrastructure/dto/create-invoice.dto';

@Injectable()
export class CreateInvoiceUseCase {
    constructor(
        @Inject(INVOICE_REPOSITORY)
        private readonly invoiceRepository: IInvoiceRepository,
    ) {}

    async execute(dto: CreateInvoiceDto): Promise<Invoice> {
        const newInvoice = new Invoice(
            'inv-' + Math.floor(Math.random() * 1000000),
            dto.amount,
            'Pending',
            dto.studentId,
            new Date(dto.dueDate),
            dto.description,
        );

        return await this.invoiceRepository.save(newInvoice);
    }
}

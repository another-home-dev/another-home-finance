import { Injectable, Inject } from '@nestjs/common';
import { INVOICE_REPOSITORY } from '../../domain/ports/invoice.repository.interface';
import type { IInvoiceRepository } from '../../domain/ports/invoice.repository.interface';
import { Invoice } from '../../domain/entities/Invoice';

@Injectable()
export class GetInvoicesUseCase {
    constructor(
        @Inject(INVOICE_REPOSITORY)
        private readonly invoiceRepository: IInvoiceRepository,
    ) {}

    async execute(): Promise<Invoice[]> {
        return await this.invoiceRepository.findAll();
    }
}

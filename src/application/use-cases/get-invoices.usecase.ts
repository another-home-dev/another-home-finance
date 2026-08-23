import { Injectable, Inject } from '@nestjs/common';
import { INVOICE_REPOSITORY } from '../../domain/ports/invoice.repository.interface';
import type { IInvoiceRepository } from '../../domain/ports/invoice.repository.interface';

@Injectable()
export class GetInvoicesUseCase {
    constructor(
        @Inject(INVOICE_REPOSITORY)
        private readonly invoiceRepository: IInvoiceRepository,
    ) {}

    async execute(studentId?: string) {
        const invoices = studentId
            ? await this.invoiceRepository.findByStudentId(studentId)
            : await this.invoiceRepository.findAll();

        return invoices.map((invoice) => ({
            invoiceId: invoice.invoiceId,
            amount: invoice.amount,
            status: invoice.effectiveStatus,
            studentId: invoice.studentId,
            dueDate: invoice.dueDate,
            description: invoice.description,
            createdAt: invoice.createdAt,
            paidAt: invoice.paidAt,
        }));
    }
}

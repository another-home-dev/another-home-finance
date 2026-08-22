import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { INVOICE_REPOSITORY } from '../../domain/ports/invoice.repository.interface';
import type { IInvoiceRepository } from '../../domain/ports/invoice.repository.interface';
import { PAYMENT_REPOSITORY } from '../../domain/ports/payment.repository.interface';
import type { IPaymentRepository } from '../../domain/ports/payment.repository.interface';
import { Payment } from '../../domain/entities/Payment';

export interface LogPaymentDto {
    invoiceId: string;
    amount: number;
}

@Injectable()
export class LogPaymentUseCase {
    constructor(
        @Inject(INVOICE_REPOSITORY)
        private readonly invoiceRepository: IInvoiceRepository,
        @Inject(PAYMENT_REPOSITORY)
        private readonly paymentRepository: IPaymentRepository,
    ) {}

    async execute(dto: LogPaymentDto): Promise<Payment> {
        const invoice = await this.invoiceRepository.findById(dto.invoiceId);
        if (!invoice) {
            throw new NotFoundException(`Invoice with ID ${dto.invoiceId} not found.`);
        }

        invoice.pay();
        await this.invoiceRepository.save(invoice);

        const newPayment = new Payment(
            'pay-' + Math.floor(Math.random() * 100000),
            dto.invoiceId,
            dto.amount,
            new Date(),
            'Success'
        );

        return await this.paymentRepository.save(newPayment);
    }
}

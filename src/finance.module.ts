import { Module } from '@nestjs/common';
import { FinanceController } from './infrastructure/controllers/finance.controller';
import { GetInvoicesUseCase } from './application/use-cases/get-invoices.usecase';
import { LogPaymentUseCase } from './application/use-cases/log-payment.usecase';
import { INVOICE_REPOSITORY } from './domain/ports/invoice.repository.interface';
import { InvoiceMockRepository } from './infrastructure/database/repositories/invoice.mock-repository';
import { PAYMENT_REPOSITORY } from './domain/ports/payment.repository.interface';
import { PaymentMockRepository } from './infrastructure/database/repositories/payment.mock-repository';

@Module({
    controllers: [FinanceController],
    providers: [
        GetInvoicesUseCase,
        LogPaymentUseCase,
        {
            provide: INVOICE_REPOSITORY,
            useClass: InvoiceMockRepository,
        },
        {
            provide: PAYMENT_REPOSITORY,
            useClass: PaymentMockRepository,
        },
    ],
    exports: [GetInvoicesUseCase, LogPaymentUseCase],
})
export class FinanceModule {}

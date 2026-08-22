import { Controller, Get, Post, Body } from '@nestjs/common';
import { GetInvoicesUseCase } from '../../application/use-cases/get-invoices.usecase';
import { LogPaymentUseCase, LogPaymentDto } from '../../application/use-cases/log-payment.usecase';

@Controller('finance')
export class FinanceController {
    constructor(
        private readonly getInvoicesUseCase: GetInvoicesUseCase,
        private readonly logPaymentUseCase: LogPaymentUseCase,
    ) {}

    @Get('invoices')
    async getInvoices() {
        const invoices = await this.getInvoicesUseCase.execute();
        return {
            message: 'Pending invoices retrieved successfully.',
            data: invoices,
        };
    }

    @Post('payments')
    async logPayment(@Body() dto: LogPaymentDto) {
        const payment = await this.logPaymentUseCase.execute(dto);
        return {
            message: 'Payment logged successfully.',
            data: payment,
        };
    }
}

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GetInvoicesUseCase } from '../../application/use-cases/get-invoices.usecase';
import { CreateInvoiceUseCase } from '../../application/use-cases/create-invoice.usecase';
import { LogPaymentUseCase } from '../../application/use-cases/log-payment.usecase';
import { CreateInvoiceDto } from '../dto/create-invoice.dto';
import { LogPaymentDto } from '../dto/log-payment.dto';

@Controller('finance')
export class FinanceController {
    constructor(
        private readonly getInvoicesUseCase: GetInvoicesUseCase,
        private readonly createInvoiceUseCase: CreateInvoiceUseCase,
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

    @Get('invoices/:studentId')
    async getInvoicesForStudent(@Param('studentId') studentId: string) {
        const invoices = await this.getInvoicesUseCase.execute(studentId);
        return {
            message: 'Invoices retrieved successfully.',
            data: invoices,
        };
    }

    @Post('invoices')
    async createInvoice(@Body() dto: CreateInvoiceDto) {
        const invoice = await this.createInvoiceUseCase.execute(dto);
        return {
            message: 'Invoice created successfully.',
            data: invoice,
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

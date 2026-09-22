import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { GetInvoicesUseCase } from '../../application/use-cases/get-invoices.usecase';
import { CreateInvoiceUseCase } from '../../application/use-cases/create-invoice.usecase';
import { LogPaymentUseCase } from '../../application/use-cases/log-payment.usecase';
import { CreateInvoiceDto } from '../dto/create-invoice.dto';
import { LogPaymentDto } from '../dto/log-payment.dto';

@ApiTags('Finance')
@Controller('finance')
export class FinanceController {
    constructor(
        private readonly getInvoicesUseCase: GetInvoicesUseCase,
        private readonly createInvoiceUseCase: CreateInvoiceUseCase,
        private readonly logPaymentUseCase: LogPaymentUseCase,
    ) {}

    @Get('invoices')
    @ApiOperation({ summary: 'Get all invoices' })
    @ApiResponse({ status: 200, description: 'Returns an array of all invoices.' })
    async getInvoices() {
        const invoices = await this.getInvoicesUseCase.execute();
        return {
            message: 'Pending invoices retrieved successfully.',
            data: invoices,
        };
    }

    @Get('invoices/:studentId')
    @ApiOperation({ summary: 'Get all invoices for a specific student' })
    @ApiParam({ name: 'studentId', type: String })
    @ApiResponse({ status: 200, description: 'Returns an array of invoices for the student.' })
    async getInvoicesForStudent(@Param('studentId') studentId: string) {
        const invoices = await this.getInvoicesUseCase.execute(studentId);
        return {
            message: 'Invoices retrieved successfully.',
            data: invoices,
        };
    }

    @Post('invoices')
    @ApiOperation({ summary: 'Create a new fee invoice for a student' })
    @ApiResponse({ status: 201, description: 'Invoice created successfully.' })
    async createInvoice(@Body() dto: CreateInvoiceDto) {
        const invoice = await this.createInvoiceUseCase.execute(dto);
        return {
            message: 'Invoice created successfully.',
            data: invoice,
        };
    }

    @Post('payments')
    @ApiOperation({ summary: 'Log a payment against an invoice' })
    @ApiResponse({ status: 201, description: 'Payment logged successfully.' })
    async logPayment(@Body() dto: LogPaymentDto) {
        const payment = await this.logPaymentUseCase.execute(dto);
        return {
            message: 'Payment logged successfully.',
            data: payment,
        };
    }
}

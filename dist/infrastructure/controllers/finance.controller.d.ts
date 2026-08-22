import { GetInvoicesUseCase } from '../../application/use-cases/get-invoices.usecase';
import { LogPaymentUseCase, LogPaymentDto } from '../../application/use-cases/log-payment.usecase';
export declare class FinanceController {
    private readonly getInvoicesUseCase;
    private readonly logPaymentUseCase;
    constructor(getInvoicesUseCase: GetInvoicesUseCase, logPaymentUseCase: LogPaymentUseCase);
    getInvoices(): Promise<{
        message: string;
        data: import("../../domain/entities/Invoice").Invoice[];
    }>;
    logPayment(dto: LogPaymentDto): Promise<{
        message: string;
        data: import("../../domain/entities/Payment").Payment;
    }>;
}

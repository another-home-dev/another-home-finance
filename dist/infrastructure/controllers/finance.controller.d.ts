import { GetInvoicesUseCase } from '../../application/use-cases/get-invoices.usecase';
import { CreateInvoiceUseCase } from '../../application/use-cases/create-invoice.usecase';
import { LogPaymentUseCase } from '../../application/use-cases/log-payment.usecase';
import { CreateInvoiceDto } from '../dto/create-invoice.dto';
import { LogPaymentDto } from '../dto/log-payment.dto';
export declare class FinanceController {
    private readonly getInvoicesUseCase;
    private readonly createInvoiceUseCase;
    private readonly logPaymentUseCase;
    constructor(getInvoicesUseCase: GetInvoicesUseCase, createInvoiceUseCase: CreateInvoiceUseCase, logPaymentUseCase: LogPaymentUseCase);
    getInvoices(): Promise<{
        message: string;
        data: {
            invoiceId: string;
            amount: number;
            status: "Pending" | "Paid" | "Overdue";
            studentId: string;
            dueDate: Date;
            description: string;
            createdAt: Date;
            paidAt: Date;
        }[];
    }>;
    getInvoicesForStudent(studentId: string): Promise<{
        message: string;
        data: {
            invoiceId: string;
            amount: number;
            status: "Pending" | "Paid" | "Overdue";
            studentId: string;
            dueDate: Date;
            description: string;
            createdAt: Date;
            paidAt: Date;
        }[];
    }>;
    createInvoice(dto: CreateInvoiceDto): Promise<{
        message: string;
        data: import("../../domain/entities/Invoice").Invoice;
    }>;
    logPayment(dto: LogPaymentDto): Promise<{
        message: string;
        data: import("../../domain/entities/Payment").Payment;
    }>;
}

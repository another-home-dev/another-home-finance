import type { IInvoiceRepository } from '../../domain/ports/invoice.repository.interface';
export declare class GetInvoicesUseCase {
    private readonly invoiceRepository;
    constructor(invoiceRepository: IInvoiceRepository);
    execute(studentId?: string): Promise<{
        invoiceId: string;
        amount: number;
        status: "Pending" | "Paid" | "Overdue";
        studentId: string;
        dueDate: Date;
        description: string;
        createdAt: Date;
        paidAt: Date;
    }[]>;
}

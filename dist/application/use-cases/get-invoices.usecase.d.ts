import type { IInvoiceRepository } from '../../domain/ports/invoice.repository.interface';
import { Invoice } from '../../domain/entities/Invoice';
export declare class GetInvoicesUseCase {
    private readonly invoiceRepository;
    constructor(invoiceRepository: IInvoiceRepository);
    execute(): Promise<Invoice[]>;
}

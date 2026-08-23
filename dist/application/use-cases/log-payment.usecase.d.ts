import type { IInvoiceRepository } from '../../domain/ports/invoice.repository.interface';
import type { IPaymentRepository } from '../../domain/ports/payment.repository.interface';
import { Payment } from '../../domain/entities/Payment';
import { LogPaymentDto } from '../../infrastructure/dto/log-payment.dto';
export declare class LogPaymentUseCase {
    private readonly invoiceRepository;
    private readonly paymentRepository;
    constructor(invoiceRepository: IInvoiceRepository, paymentRepository: IPaymentRepository);
    execute(dto: LogPaymentDto): Promise<Payment>;
}

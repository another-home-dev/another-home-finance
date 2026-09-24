import { LogPaymentUseCase } from './log-payment.usecase';
import { IInvoiceRepository } from '../../domain/ports/invoice.repository.interface';
import { IPaymentRepository } from '../../domain/ports/payment.repository.interface';
import { Invoice } from '../../domain/entities/Invoice';
import { NotFoundException } from '@nestjs/common';

describe('LogPaymentUseCase', () => {
    let useCase: LogPaymentUseCase;
    let mockInvoiceRepository: jest.Mocked<IInvoiceRepository>;
    let mockPaymentRepository: jest.Mocked<IPaymentRepository>;

    beforeEach(() => {
        mockInvoiceRepository = {
            findAll: jest.fn(),
            findById: jest.fn(),
            findByStudentId: jest.fn(),
            findDueForReminder: jest.fn(),
            save: jest.fn(),
        };
        mockPaymentRepository = {
            save: jest.fn(),
        };

        useCase = new LogPaymentUseCase(mockInvoiceRepository, mockPaymentRepository);
    });

    it('should throw NotFoundException if the invoice does not exist', async () => {
        mockInvoiceRepository.findById.mockResolvedValue(null);

        await expect(
            useCase.execute({ invoiceId: 'missing-inv', amount: 5000 }),
        ).rejects.toThrow(NotFoundException);
    });

    it('should mark the invoice as Paid and save a Success payment', async () => {
        const invoice = new Invoice('inv-1', 5000, 'Pending', 'stu-1', new Date('2026-09-30'), 'Hostel fee');
        mockInvoiceRepository.findById.mockResolvedValue(invoice);
        mockPaymentRepository.save.mockImplementation(async (payment) => payment);

        const result = await useCase.execute({ invoiceId: 'inv-1', amount: 5000 });

        expect(invoice.status).toBe('Paid');
        expect(mockInvoiceRepository.save).toHaveBeenCalledWith(invoice);
        expect(result.invoiceId).toBe('inv-1');
        expect(result.status).toBe('Success');
    });
});

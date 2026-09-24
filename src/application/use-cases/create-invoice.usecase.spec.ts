import { CreateInvoiceUseCase } from './create-invoice.usecase';
import { IInvoiceRepository } from '../../domain/ports/invoice.repository.interface';
import { Invoice } from '../../domain/entities/Invoice';
import { CreateInvoiceDto } from '../../infrastructure/dto/create-invoice.dto';

describe('CreateInvoiceUseCase', () => {
    let useCase: CreateInvoiceUseCase;
    let mockInvoiceRepository: jest.Mocked<IInvoiceRepository>;

    beforeEach(() => {
        mockInvoiceRepository = {
            findAll: jest.fn(),
            findById: jest.fn(),
            findByStudentId: jest.fn(),
            findDueForReminder: jest.fn(),
            save: jest.fn(),
        };

        useCase = new CreateInvoiceUseCase(mockInvoiceRepository);
    });

    const dto: CreateInvoiceDto = {
        studentId: 'stu-1',
        amount: 5000,
        dueDate: '2026-09-30',
        description: 'Semester hostel fee',
    };

    it('should create a Pending invoice for the given student and amount', async () => {
        mockInvoiceRepository.save.mockImplementation(async (invoice) => invoice);

        const result = await useCase.execute(dto);

        expect(result.studentId).toBe('stu-1');
        expect(result.amount).toBe(5000);
        expect(result.status).toBe('Pending');
        expect(mockInvoiceRepository.save).toHaveBeenCalledWith(expect.any(Invoice));
    });

    it('should generate a unique invoiceId prefixed with "inv-"', async () => {
        mockInvoiceRepository.save.mockImplementation(async (invoice) => invoice);

        const result = await useCase.execute(dto);

        expect(result.invoiceId).toMatch(/^inv-\d+$/);
    });
});

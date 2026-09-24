import { SendPaymentRemindersUseCase } from './send-payment-reminders.usecase';
import { IInvoiceRepository } from '../../domain/ports/invoice.repository.interface';
import { Invoice } from '../../domain/entities/Invoice';

describe('SendPaymentRemindersUseCase', () => {
    let useCase: SendPaymentRemindersUseCase;
    let mockInvoiceRepository: jest.Mocked<IInvoiceRepository>;

    beforeEach(() => {
        mockInvoiceRepository = {
            findAll: jest.fn(),
            findById: jest.fn(),
            findByStudentId: jest.fn(),
            findDueForReminder: jest.fn(),
            save: jest.fn(),
        };

        useCase = new SendPaymentRemindersUseCase(mockInvoiceRepository);
    });

    it('does nothing when no invoice is due for a reminder', async () => {
        mockInvoiceRepository.findDueForReminder.mockResolvedValue([]);

        const count = await useCase.execute();

        expect(count).toBe(0);
        expect(mockInvoiceRepository.save).not.toHaveBeenCalled();
    });

    it('marks a due-soon invoice as reminded without touching its status', async () => {
        const dueDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000); // 2 days from now
        const invoice = new Invoice('inv-1', 5000, 'Pending', 'stu-1', dueDate, 'Hostel fee');
        mockInvoiceRepository.findDueForReminder.mockResolvedValue([invoice]);
        mockInvoiceRepository.save.mockImplementation(async (i) => i);

        const count = await useCase.execute();

        expect(count).toBe(1);
        expect(invoice.status).toBe('Pending');
        expect(invoice.reminderSentAt).not.toBeNull();
        expect(mockInvoiceRepository.save).toHaveBeenCalledWith(invoice);
    });

    it('reminds every unreminded invoice it is given', async () => {
        const soon = new Invoice('inv-1', 5000, 'Pending', 'stu-1', new Date(Date.now() + 86400000), 'Hostel fee');
        const overdue = new Invoice('inv-2', 3000, 'Pending', 'stu-2', new Date(Date.now() - 86400000), 'Mess fee');
        mockInvoiceRepository.findDueForReminder.mockResolvedValue([soon, overdue]);
        mockInvoiceRepository.save.mockImplementation(async (i) => i);

        const count = await useCase.execute();

        expect(count).toBe(2);
        expect(soon.reminderSentAt).not.toBeNull();
        expect(overdue.reminderSentAt).not.toBeNull();
    });
});

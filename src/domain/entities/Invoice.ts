export class Invoice {
    constructor(
        public readonly invoiceId: string,
        public readonly amount: number,
        public status: 'Pending' | 'Paid',
        public readonly studentId: string,
        public readonly dueDate: Date,
        public readonly description: string,
        public readonly createdAt: Date = new Date(),
        public paidAt: Date | null = null,
    ) {}

    pay(): void {
        this.status = 'Paid';
        this.paidAt = new Date();
    }

    /** 'Overdue' is a derived read-only view, never persisted as a third status value. */
    get effectiveStatus(): 'Pending' | 'Paid' | 'Overdue' {
        if (this.status === 'Pending' && this.dueDate < new Date()) {
            return 'Overdue';
        }
        return this.status;
    }
}

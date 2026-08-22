export class Invoice {
    constructor(
        public readonly invoiceId: string,
        public readonly amount: number,
        public status: 'Pending' | 'Paid',
        public readonly studentId: string,
    ) {}

    pay(): void {
        this.status = 'Paid';
    }
}

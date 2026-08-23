export class Payment {
    constructor(
        public readonly paymentId: string,
        public readonly invoiceId: string,
        public readonly amount: number,
        public readonly paymentDate: Date,
        public readonly status: 'Success' | 'Failed',
        public readonly referenceNumber: string | null = null,
    ) {}
}

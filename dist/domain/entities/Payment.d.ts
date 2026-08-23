export declare class Payment {
    readonly paymentId: string;
    readonly invoiceId: string;
    readonly amount: number;
    readonly paymentDate: Date;
    readonly status: 'Success' | 'Failed';
    readonly referenceNumber: string | null;
    constructor(paymentId: string, invoiceId: string, amount: number, paymentDate: Date, status: 'Success' | 'Failed', referenceNumber?: string | null);
}

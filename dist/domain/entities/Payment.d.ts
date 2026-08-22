export declare class Payment {
    readonly paymentId: string;
    readonly invoiceId: string;
    readonly amount: number;
    readonly paymentDate: Date;
    readonly status: 'Success' | 'Failed';
    constructor(paymentId: string, invoiceId: string, amount: number, paymentDate: Date, status: 'Success' | 'Failed');
}

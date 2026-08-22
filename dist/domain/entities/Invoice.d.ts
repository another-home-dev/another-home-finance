export declare class Invoice {
    readonly invoiceId: string;
    readonly amount: number;
    status: 'Pending' | 'Paid';
    readonly studentId: string;
    constructor(invoiceId: string, amount: number, status: 'Pending' | 'Paid', studentId: string);
    pay(): void;
}

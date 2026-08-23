export declare class Invoice {
    readonly invoiceId: string;
    readonly amount: number;
    status: 'Pending' | 'Paid';
    readonly studentId: string;
    readonly dueDate: Date;
    readonly description: string;
    readonly createdAt: Date;
    paidAt: Date | null;
    constructor(invoiceId: string, amount: number, status: 'Pending' | 'Paid', studentId: string, dueDate: Date, description: string, createdAt?: Date, paidAt?: Date | null);
    pay(): void;
    get effectiveStatus(): 'Pending' | 'Paid' | 'Overdue';
}

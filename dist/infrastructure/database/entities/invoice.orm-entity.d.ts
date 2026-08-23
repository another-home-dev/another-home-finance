export declare class InvoiceOrmEntity {
    invoiceId: string;
    amount: number;
    status: 'Pending' | 'Paid';
    studentId: string;
    dueDate: Date;
    description: string;
    createdAt: Date;
    paidAt: Date | null;
}

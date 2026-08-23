export declare class PaymentOrmEntity {
    paymentId: string;
    invoiceId: string;
    amount: number;
    paymentDate: Date;
    status: 'Success' | 'Failed';
    referenceNumber: string | null;
}

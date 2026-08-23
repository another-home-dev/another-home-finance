import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('payments')
export class PaymentOrmEntity {
    @PrimaryColumn()
    paymentId: string;

    @Column()
    invoiceId: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    amount: number;

    @Column({ type: 'timestamp' })
    paymentDate: Date;

    @Column({ type: 'enum', enum: ['Success', 'Failed'] })
    status: 'Success' | 'Failed';

    @Column({ type: 'varchar', length: 100, nullable: true })
    referenceNumber: string | null;
}

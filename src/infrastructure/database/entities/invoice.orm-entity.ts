import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('invoices')
export class InvoiceOrmEntity {
    @PrimaryColumn()
    invoiceId: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    amount: number;

    @Column({ type: 'enum', enum: ['Pending', 'Paid'], default: 'Pending' })
    status: 'Pending' | 'Paid';

    @Column()
    studentId: string;

    @Column({ type: 'date' })
    dueDate: Date;

    @Column({ type: 'varchar', length: 255 })
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    paidAt: Date | null;

    @Column({ type: 'timestamp', nullable: true })
    reminderSentAt: Date | null;
}

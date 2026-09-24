import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { SendPaymentRemindersUseCase } from '../../application/use-cases/send-payment-reminders.usecase';

@Injectable()
export class PaymentReminderScheduler {
    private readonly logger = new Logger(PaymentReminderScheduler.name);

    constructor(private readonly sendPaymentReminders: SendPaymentRemindersUseCase) {}

    @Cron(CronExpression.EVERY_DAY_AT_9AM)
    async handleCron(): Promise<void> {
        const count = await this.sendPaymentReminders.execute();
        if (count > 0) {
            this.logger.log(`Sent ${count} payment reminder(s).`);
        }
    }
}

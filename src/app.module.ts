import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinanceModule } from './finance.module';
import { InvoiceOrmEntity } from './infrastructure/database/entities/invoice.orm-entity';
import { PaymentOrmEntity } from './infrastructure/database/entities/payment.orm-entity';
import { HealthController } from './health.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST ?? '127.0.0.1',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3308,
      username: process.env.DB_USERNAME ?? 'root',
      password: process.env.DB_PASSWORD ?? 'ishakya0809',
      database: process.env.DB_DATABASE ?? 'another_home_finance',
      entities: [InvoiceOrmEntity, PaymentOrmEntity],
      synchronize: true, // Keep this true for dev, false for prod
    }),
    FinanceModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}

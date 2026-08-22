import { Module } from '@nestjs/common';
import { FinanceModule } from './finance.module';


@Module({
  imports: [FinanceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


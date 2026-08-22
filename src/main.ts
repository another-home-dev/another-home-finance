import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4003);
  console.log('Finance service is listening on port 4003');
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { StockGeneratorModule } from './stock_generator.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(StockGeneratorModule);
  await app.listen();
}
bootstrap();

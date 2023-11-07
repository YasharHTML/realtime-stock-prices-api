import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import helmet from 'helmet';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Stock Prices example')
    .setDescription('The Stock Prices API description')
    .setVersion('1.0')
    .addTag('prices')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.use(cors({ methods: ['GET'] }));
  app.use(helmet());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
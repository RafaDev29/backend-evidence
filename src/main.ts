import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseFormatMiddleware } from './middleware/response.middleware';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Aplicar validaciones globales
  app.useGlobalPipes(new ValidationPipe());

  // Registrar el middleware globalmente
  app.use(new ResponseFormatMiddleware().use);

  await app.listen(3000);
}
bootstrap();

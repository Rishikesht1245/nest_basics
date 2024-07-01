import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // for stripping the unwanted inputs which are not mentioned in the class validators(interface)
      whitelist: true,
    }),
  );
  await app.listen(3333);
}
bootstrap();

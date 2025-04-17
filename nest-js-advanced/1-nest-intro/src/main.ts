import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    // only allows the properties present in DTO with decorators
    whitelist : true,
    //  throws error if non mentioned properties are present in the req body
    forbidNonWhitelisted : true,
    // make the body instance of the mentioned DTO
    transform : true,
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();



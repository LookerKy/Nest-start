import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //validation pip
  //파이프는 미들웨어 라고 생각할수잇음
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      disableErrorMessages: true, // erro message 생략 Prod모드일 때 사용
    }),
  );
  await app.listen(3000);
}
bootstrap();

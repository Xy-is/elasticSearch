import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = process.env.PORT || 3000;

  app.setBaseViewsDir(join(__dirname, '..', '..', 'views'));
  app.useStaticAssets(join(__dirname, '..', '..', 'public'));
  app.setViewEngine('hbs');

  await app.listen(port);
  console.log(`Server started on port ${port}`);
}

bootstrap();

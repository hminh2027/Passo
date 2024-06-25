import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger();

  const globalPrefix = configService.get('app.apiPrefix');
  const versioningPrefix = configService.get('app.apiVersion');
  const port = configService.get('app.port');
  app.setGlobalPrefix(globalPrefix);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: versioningPrefix,
  });

  await app.listen(port);
  logger.log(`Http Server running on ${await app.getUrl()}`, 'NestApplication');
}
bootstrap();

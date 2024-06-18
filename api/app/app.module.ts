import { DatabaseModule } from './common/database/database.module';
import { PriceListService } from './modules/price_list/price-list.service';
import { PriceListController } from './modules/price_list/price-list.controller';
import { PriceListModule } from './modules/price_list/price-list.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configs from './common/configs';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
      expandVariables: true,
    }),
    DatabaseModule,
    PriceListModule,
  ],
  controllers: [PriceListController, AppController],
  providers: [PriceListService, AppService],
})
export class AppModule {}

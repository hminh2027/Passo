import { CustomerModule } from '../modules/customer/customer.module';
import { CustomerGroupModule } from '../modules/customer_group/customer-group.module';
import { DatabaseModule } from '../common/database/database.module';
import { PriceListService } from '../modules/price_list/price-list.service';
import { PriceListController } from '../modules/price_list/price-list.controller';
import { PriceListModule } from '../modules/price_list/price-list.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configs from '../common/configs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from '../common/database/database.service';
import { SettingModule } from '../modules/setting/setting.module';

@Module({
  imports: [
    CustomerModule,
    CustomerGroupModule,
    PriceListModule,
    SettingModule,
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [DatabaseModule],
      inject: [DatabaseService],
      useFactory: (databaseService: DatabaseService) => databaseService.createOptions(),
    }),
  ],
  controllers: [PriceListController, AppController],
  providers: [PriceListService],
})
export class AppModule {}

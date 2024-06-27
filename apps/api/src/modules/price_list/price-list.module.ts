import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceList } from '~/entities/price-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PriceList])],
  controllers: [],
  providers: [],
})
export class PriceListModule {}

import { PriceList } from '@app/entities/price-list.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PriceList])],
  controllers: [],
  providers: [],
})
export class PriceListModule {}

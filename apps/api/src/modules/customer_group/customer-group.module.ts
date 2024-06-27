import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerGroup } from '~/entities/customer-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerGroup])],
  controllers: [],
  providers: [],
})
export class CustomerGroupModule {}

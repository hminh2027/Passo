import { CustomerGroup } from '@app/entities/customer-group.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerGroup])],
  controllers: [],
  providers: [],
})
export class CustomerGroupModule {}

import { Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 't_price_list' })
export class PriceList extends BaseEntity {
  code: string;
  name: string;
  status: 'enum';
}

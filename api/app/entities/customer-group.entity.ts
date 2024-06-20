import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PriceList } from './price-list.entity';
import { Customer } from './customer.entity';

@Entity({ name: 't_customer_group' })
export class CustomerGroup extends BaseEntity {
  @Column({ type: 'varchar' })
  code: string;

  @Column({ type: 'nvarchar' })
  name: string;

  @Column({ type: 'nvarchar' })
  name_translate: string;

  @Column({ type: 'nvarchar' })
  note: string;

  @Column({ type: 'nvarchar', nullable: true })
  default_discount_rate?: string;

  @Column({ type: 'boolean' })
  is_default: boolean;

  // Relationships
  @ManyToOne(() => PriceList, (pl) => pl.customer_groups)
  @JoinColumn({ name: 'price_list_id' })
  price_list: PriceList;

  @ManyToOne(() => Customer, (c) => c.customer_groups)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}

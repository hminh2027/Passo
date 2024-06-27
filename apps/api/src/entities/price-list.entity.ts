import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { CustomerGroup } from './customer-group.entity';
import { Customer } from './customer.entity';

@Entity({ name: 't_price_list' })
export class PriceList extends BaseEntity {
  @Column({ type: 'varchar' })
  code: string;

  @Column({ type: 'nvarchar' })
  name: string;

  @Column({ type: 'boolean', default: false })
  is_default: boolean;

  @OneToMany(() => CustomerGroup, (cg) => cg.price_list)
  customer_groups: CustomerGroup[];

  @OneToMany(() => Customer, (c) => c.price_list)
  customers: Customer[];
}

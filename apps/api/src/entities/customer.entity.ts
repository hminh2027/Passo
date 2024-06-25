import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { CustomerGroup } from './customer-group.entity';
import { PriceList } from './price-list.entity';

enum IncentiveLevel {
  Customer = 'customer',
  Group = 'group',
}

enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

@Entity({ name: 't_customer' })
export class Customer extends BaseEntity {
  @Column({ type: 'varchar' })
  code: string;

  @Column({ type: 'nvarchar' })
  name: string;

  @Column({ type: 'nvarchar' })
  phone_no: string;

  @Column({ type: 'nvarchar' })
  description: string;

  @Column({ type: 'nvarchar', nullable: true })
  email: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'date', nullable: true })
  dob: Date;

  @Column({ type: 'text' })
  apply_incentives: IncentiveLevel;

  @Column({ type: 'int' })
  debt: number;

  @Column({ type: 'text' })
  gender: Gender;

  @Column({ type: 'nvarchar', nullable: true })
  default_discount_rate?: string;

  // Relationships
  @OneToMany(() => CustomerGroup, (cg) => cg.customer)
  customer_groups: CustomerGroup[];

  @ManyToOne(() => PriceList, (pl) => pl.customers, { nullable: true })
  @JoinColumn({ name: 'price_list_id' })
  price_list?: PriceList;

  // TODO: Add district_id & city_id
  // TODO: Link to Customer
}

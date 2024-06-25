import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 't_setting' })
export class Setting extends BaseEntity {
  @Column({ type: 'text' })
  shop_name: string;

  @Column({ type: 'text' })
  image_url?: string;

  @Column({ type: 'text' })
  phone_no: string;

  @Column({ type: 'text' })
  email?: string;

  @Column({ type: 'text' })
  address: string;

  // TODO: Add district_id & city_id
}

import {
  DATABASE_CREATED_AT_FIELD_NAME,
  DATABASE_DELETED_AT_FIELD_NAME,
  DATABASE_UPDATED_AT_FIELD_NAME,
} from '@app/constants/entity.constant';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  [DATABASE_CREATED_AT_FIELD_NAME]?: Date;

  @UpdateDateColumn()
  [DATABASE_UPDATED_AT_FIELD_NAME]?: Date;

  @DeleteDateColumn()
  [DATABASE_DELETED_AT_FIELD_NAME]?: Date;
}

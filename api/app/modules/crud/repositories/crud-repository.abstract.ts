import { Repository } from 'typeorm';
import { CrudRepositoryInterface } from '../interfaces/crud-repository.interface';

export abstract class CrudRepository<Entity>
  extends Repository<Entity>
  implements CrudRepositoryInterface<Entity> {
  // Can add more methods here
}

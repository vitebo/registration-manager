import { Registration } from '~/entities/registration';

export interface RegistrationGateway {
  get(): Promise<Registration[]>;
  update(registration: Registration): Promise<Registration>;
  delete(registration: Registration): Promise<void>;
  create(registration: Registration): Promise<Registration>;
}

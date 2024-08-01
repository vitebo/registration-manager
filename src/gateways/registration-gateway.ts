import { Registration, Cpf } from '~/entities';

export interface RegistrationGateway {
  getAll(): Promise<Registration[]>;
  update(registration: Registration): Promise<Registration>;
  delete(registration: Registration): Promise<void>;
  create(registration: Registration): Promise<Registration>;
  findByCpf(cpf: Cpf): Promise<Registration | null>;
}

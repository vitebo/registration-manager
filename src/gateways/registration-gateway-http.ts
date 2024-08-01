import { HttpClient } from '~/drivers';
import { Registration, Cpf } from '~/entities';
import { HttpRegistrationMapper } from '~/mappers';

import { RegistrationGateway } from './registration-gateway';

export class RegistrationGatewayHttp implements RegistrationGateway {
  constructor(private readonly httpClient: HttpClient) {}

  async create(registration: Registration): Promise<Registration> {
    const raw = await this.httpClient.post(
      'http://localhost:3000/registrations',
      HttpRegistrationMapper.toHttp(registration),
      new Headers({
        'Content-Type': 'application/json'
      })
    );
    const newRegistration = HttpRegistrationMapper.toDomain(raw);
    return Promise.resolve(newRegistration);
  }

  async delete(registration: Registration): Promise<void> {
    return await this.httpClient.delete(`http://localhost:3000/registrations/${registration.id}`, new Headers());
  }

  async getAll(): Promise<Registration[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const rawList = await this.httpClient.get<unknown[]>('http://localhost:3000/registrations', new Headers());
    const registrations = rawList.map((raw) => HttpRegistrationMapper.toDomain(raw));
    return Promise.resolve(registrations);
  }

  async update(registration: Registration): Promise<Registration> {
    const raw = await this.httpClient.put(
      `http://localhost:3000/registrations/${registration.id}`,
      HttpRegistrationMapper.toHttp(registration),
      new Headers({
        'Content-Type': 'application/json'
      })
    );
    const updatedRegistration = HttpRegistrationMapper.toDomain(raw);
    return Promise.resolve(updatedRegistration);
  }

  async findByCpf(cpf: Cpf): Promise<Registration | null> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const rawList = await this.httpClient.get<unknown[]>(
      `http://localhost:3000/registrations?cpf=${cpf.value}`,
      new Headers()
    );
    const registrations = rawList.map((registration) => HttpRegistrationMapper.toDomain(registration));
    const registration = registrations.find((registration) => registration.cpf.value === cpf.value);
    return Promise.resolve(registration ?? null);
  }
}

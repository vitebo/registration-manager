import { Storage } from '~/drivers';
import { Cpf, Registration } from '~/entities';
import { StorageRegistrationMapper } from '~/mappers';

import { RegistrationGateway } from './registration-gateway';

export class RegistrationGatewayStorage implements RegistrationGateway {
  private static KEY = 'registrations';

  constructor(
    private storage: Storage,
    private delay: number
  ) {}

  async create(registration: Registration): Promise<Registration> {
    await new Promise((resolve) => setTimeout(resolve, this.delay));
    const registrations = this.loadRegistrations();
    if (registration.id) {
      registrations.push(registration);
      this.saveRegistrations(registrations);
      return Promise.resolve(registration);
    }
    const createdRegistration = new Registration({
      id: String(registrations.length),
      employeeName: registration.employeeName.value,
      cpf: registration.cpf.value,
      email: registration.email.value,
      admissionDate: registration.admissionDate,
      status: registration.status.value
    });
    registrations.push(createdRegistration);
    this.saveRegistrations(registrations);
    return Promise.resolve(createdRegistration);
  }

  async delete(registration: Registration): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, this.delay));
    const registrations = this.loadRegistrations();
    const target = registrations.findIndex((item) => item.id === registration.id);
    registrations.splice(target, 1);
    this.saveRegistrations(registrations);
    return Promise.resolve(undefined);
  }

  async getAll(): Promise<Registration[]> {
    await new Promise((resolve) => setTimeout(resolve, this.delay));
    const registrations = this.loadRegistrations();
    return Promise.resolve(registrations);
  }

  async update(registration: Registration): Promise<Registration> {
    await new Promise((resolve) => setTimeout(resolve, this.delay));
    const registrations = this.loadRegistrations();
    const target = registrations.findIndex((item) => item.id === registration.id);
    registrations.splice(target, 1, registration);
    this.saveRegistrations(registrations);
    return Promise.resolve(registration);
  }

  async findByCpf(cpf: Cpf): Promise<Registration | null> {
    await new Promise((resolve) => setTimeout(resolve, this.delay));
    const registrations = this.loadRegistrations();
    const registrationTarget = registrations.find((registration) => registration.cpf.value === cpf.value);
    return Promise.resolve(registrationTarget ?? null);
  }

  private loadRegistrations(): Registration[] {
    const registrationsRaw = this.storage.load(RegistrationGatewayStorage.KEY);
    return registrationsRaw ? StorageRegistrationMapper.toDomain(registrationsRaw) : [];
  }

  private saveRegistrations(registrations: Registration[]): void {
    this.storage.save(RegistrationGatewayStorage.KEY, StorageRegistrationMapper.toStorage(registrations));
  }
}

import { Cpf, Registration } from '~/entities';

import { RegistrationGateway } from './registration-gateway';

export class RegistrationGatewayMemory implements RegistrationGateway {
  private registrations: Registration[] = [];

  create(registration: Registration): Promise<Registration> {
    if (registration.id) {
      this.registrations.push(registration);
      return Promise.resolve(registration);
    }
    const createdRegistration = new Registration({
      id: String(this.registrations.length),
      employeeName: registration.employeeName.value,
      cpf: registration.cpf.value,
      email: registration.email.value,
      admissionDate: registration.admissionDate,
      status: registration.status.value
    });
    this.registrations.push(createdRegistration);
    return Promise.resolve(createdRegistration);
  }

  delete(registration: Registration): Promise<void> {
    const target = this.registrations.findIndex((item) => item.id === registration.id);
    this.registrations.splice(target, 1);
    return Promise.resolve(undefined);
  }

  getAll(): Promise<Registration[]> {
    return Promise.resolve(this.registrations);
  }

  update(registration: Registration): Promise<Registration> {
    const target = this.registrations.findIndex((item) => item.id === registration.id);
    this.registrations.splice(target, 1, registration);
    return Promise.resolve(registration);
  }

  findByCpf(cpf: Cpf): Promise<Registration | null> {
    const registrationTarget = this.registrations.find((registration) => registration.cpf.value === cpf.value);
    return Promise.resolve(registrationTarget ?? null);
  }
}

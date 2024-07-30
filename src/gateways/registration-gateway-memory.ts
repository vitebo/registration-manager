import { RegistrationGateway } from './registration-gateway'
import {Registration} from "~/entities/registration.ts";

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
        status: registration.status.value,
    })
    this.registrations.push(createdRegistration);
    return Promise.resolve(createdRegistration);
  }

  delete(registration: Registration): Promise<void> {
    const target = this.registrations.findIndex((item) => item.id === registration.id);
    this.registrations.splice(target, 1);
    return Promise.resolve(undefined);
  }

  get(): Promise<Registration[]> {
    return Promise.resolve(this.registrations);
  }

  update(registration: Registration): Promise<Registration> {
    const target = this.registrations.findIndex((item) => item.id === registration.id);
    this.registrations.splice(target, 1, registration);
    return Promise.resolve(registration);
  }
}
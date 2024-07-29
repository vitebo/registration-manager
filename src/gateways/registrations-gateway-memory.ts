import { RegistrationsGateway } from './registrations-gateway'
import {Registration} from "~/entities/registration.ts";

export class RegistrationsGatewayMemory implements RegistrationsGateway {
  private registrations: Registration[] = [];

  create(registration: Registration): Promise<void> {
    this.registrations.push(registration);
    return Promise.resolve(undefined);
  }

  delete(registration: Registration): Promise<void> {
    const target = this.registrations.findIndex((item) => item.id === registration.id);
    this.registrations.splice(target, 1);
    return Promise.resolve(undefined);
  }

  get(): Promise<Registration[]> {
    return Promise.resolve(this.registrations);
  }

  update(registration: Registration): Promise<void> {
    const target = this.registrations.findIndex((item) => item.id === registration.id);
    this.registrations.splice(target, 1, registration);
    return Promise.resolve(undefined);
  }
}
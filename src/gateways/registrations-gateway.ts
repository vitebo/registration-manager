import { Registration } from "~/entities/registration"

export interface RegistrationsGateway {
  get(): Promise<Registration[]>
  update(registration: Registration): Promise<void>
  delete(registration: Registration): Promise<void>
  create(registration: Registration): Promise<void>
}
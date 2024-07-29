import { Registration } from "~/entities/registration"

export interface RegistrationGateway {
  get(): Promise<Registration[]>
  update(registration: Registration): Promise<void>
  delete(registration: Registration): Promise<void>
  create(registration: Registration): Promise<void>
}
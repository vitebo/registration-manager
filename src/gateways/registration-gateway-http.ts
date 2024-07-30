import { HttpClient } from '~/drivers';
import { RegistrationStatusEnum, Registration } from '~/entities';

import { RegistrationGateway } from './registration-gateway';

interface RegistrationData {
  id: string;
  employeeName: string;
  cpf: string;
  email: string;
  admissionDate: string;
  status: keyof typeof RegistrationStatusEnum;
}

export class RegistrationGatewayHttp implements RegistrationGateway {
  constructor(private readonly httpClient: HttpClient) {}

  async create(registration: Registration): Promise<Registration> {
    const data = await this.httpClient.post<RegistrationData>(
      'http://localhost:3000/registrations',
      {
        employeeName: registration.employeeName.value,
        cpf: registration.cpf.value,
        email: registration.email.value,
        admissionDate: registration.admissionDate.toString(),
        status: registration.status.value
      },
      new Headers({
        'Content-Type': 'application/json'
      })
    );
    const newRegistration = new Registration({
      id: data.id,
      employeeName: data.employeeName,
      cpf: data.cpf,
      email: data.email,
      admissionDate: new Date(data.admissionDate),
      status: data.status
    });
    return Promise.resolve(newRegistration);
  }

  async delete(registration: Registration): Promise<void> {
    this.httpClient.delete(`http://localhost:3000/registrations/${registration.id}`, new Headers());
  }

  async get(): Promise<Registration[]> {
    const data = await this.httpClient.get<RegistrationData[]>('http://localhost:3000/registrations', new Headers());
    const registrations = data.map((registration: any) => {
      return new Registration({
        id: registration.id,
        employeeName: registration.employeeName,
        cpf: registration.cpf,
        email: registration.email,
        admissionDate: registration.admissionDate,
        status: registration.status
      });
    });
    return Promise.resolve(registrations);
  }

  async update(registration: Registration): Promise<Registration> {
    const data = await this.httpClient.put<RegistrationData>(
      `http://localhost:3000/registrations/${registration.id}`,
      {
        employeeName: registration.employeeName.value,
        cpf: registration.cpf.value,
        email: registration.email.value,
        admissionDate: registration.admissionDate.toString(),
        status: registration.status.value
      },
      new Headers({
        'Content-Type': 'application/json'
      })
    );
    const updatedRegistration = new Registration({
      id: data.id,
      employeeName: data.employeeName,
      cpf: data.cpf,
      email: data.email,
      admissionDate: new Date(data.admissionDate),
      status: data.status
    });
    return Promise.resolve(updatedRegistration);
  }
}

import { Registration } from '~/entities';

export class HttpRegistrationMapper {
  static toHttp(registration: Registration) {
    return {
      employeeName: registration.employeeName.value,
      cpf: registration.cpf.value,
      email: registration.email.value,
      admissionDate: registration.admissionDate.toString(),
      status: registration.status.value
    };
  }

  static toDomain(raw: any): Registration {
    return new Registration({
      id: raw.id,
      employeeName: raw.employeeName,
      cpf: raw.cpf,
      email: raw.email,
      admissionDate: new Date(raw.admissionDate),
      status: raw.status
    });
  }
}

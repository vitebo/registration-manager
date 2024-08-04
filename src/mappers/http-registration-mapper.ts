import { Registration } from '~/entities';

import { StringDateMapper } from './string-date-mapper';

export class HttpRegistrationMapper {
  static toHttp(registration: Registration) {
    return {
      employeeName: registration.employeeName.value,
      cpf: registration.cpf.value,
      email: registration.email.value,
      admissionDate: StringDateMapper.toString(registration.admissionDate),
      status: registration.status.value
    };
  }

  static toDomain(raw: any): Registration {
    return new Registration({
      id: raw.id,
      employeeName: raw.employeeName,
      cpf: raw.cpf,
      email: raw.email,
      admissionDate: raw.admissionDate,
      status: raw.status
    });
  }
}

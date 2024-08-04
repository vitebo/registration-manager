import { Registration, RegistrationStatusEnum } from '~/entities';

import { StringDateMapper } from './string-date-mapper';

interface StorageRegistration {
  registrationId?: string;
  employeeName: string;
  cpf: string;
  email: string;
  admissionDate: string;
  status: string;
}

export class StorageRegistrationMapper {
  static toStorage(registrations: Registration[]) {
    return JSON.stringify(
      registrations.map<StorageRegistration>((registration) => ({
        registrationId: registration.id,
        employeeName: registration.employeeName.value,
        cpf: registration.cpf.value,
        email: registration.email.value,
        admissionDate: StringDateMapper.toString(registration.admissionDate),
        status: registration.status.value
      }))
    );
  }

  static toDomain(raw: string): Registration[] {
    const dataList = JSON.parse(raw) as StorageRegistration[];
    return dataList.map(
      (data) =>
        new Registration({
          id: data.registrationId,
          employeeName: data.employeeName,
          cpf: data.cpf,
          email: data.email,
          admissionDate: data.admissionDate,
          status: RegistrationStatusEnum[data.status as keyof typeof RegistrationStatusEnum]
        })
    );
  }
}

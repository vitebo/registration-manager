import { fakerPT_BR as faker } from '@faker-js/faker';
import { generate as generateCpf } from 'gerador-validador-cpf';

import { RegistrationStatusEnum, Registration } from '~/entities';

export class RegistrationFactory {
  static create({
    id = faker.string.uuid(),
    employeeName = faker.person.fullName(),
    cpf = generateCpf(),
    email = faker.internet.email(),
    admissionDate = faker.date.recent({ days: 10 }),
    status = faker.helpers.enumValue(RegistrationStatusEnum)
  } = {}) {
    return new Registration({
      id,
      employeeName,
      cpf,
      email,
      admissionDate,
      status
    });
  }
}

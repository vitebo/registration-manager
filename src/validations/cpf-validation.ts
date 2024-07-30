import { Cpf, CpfLengthError, CpfFormatError, CpfEmptyError } from '~/entities';

export class CpfValidation {
  static validate(value: string): string | undefined {
    try {
      new Cpf(value);
    } catch (error) {
      if (error instanceof CpfEmptyError) {
        return 'Cpf não pode ser vazio';
      }
      if (error instanceof CpfLengthError) {
        return `Cpf deve ter ${Cpf.LENGTH} dígitos`;
      }
      if (error instanceof CpfFormatError) {
        return 'Formato de cpf inválido';
      }
      return 'Cpf inválido';
    }
  }
}

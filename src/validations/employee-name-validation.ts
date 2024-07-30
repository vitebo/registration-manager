import {
  EmployeeName,
  EmployeeNameFirstLetterIsNumberError,
  EmployeeNameEmptyError,
  EmployeeNameDontHaveMoreThanOneNameError
} from '~/entities';

export class EmployeeNameValidation {
  static validate(value: string): string | undefined {
    try {
      new EmployeeName(value);
    } catch (error) {
      if (error instanceof EmployeeNameFirstLetterIsNumberError) {
        return 'A primeira letra do nome não pode ser um número';
      }
      if (error instanceof EmployeeNameEmptyError) {
        return 'Nome não pode ser vazio';
      }
      if (error instanceof EmployeeNameDontHaveMoreThanOneNameError) {
        return 'Deve conter nome e sobrenome';
      }
      return 'Nome inválido';
    }
  }
}

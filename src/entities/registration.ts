import { Cpf } from './cpf';
import { Email } from './email';
import { EmployeeName } from './employee-name';
import { RegistrationStatusFactory, RegistrationStatusEnum, RegistrationStatus } from './registration-status';

interface RegistrationProps {
  id?: string;
  employeeName: string;
  cpf: string;
  email: string;
  admissionDate: Date;
  status?: keyof typeof RegistrationStatusEnum;
}

export class Registration {
  public readonly id?;
  public employeeName: EmployeeName;
  public cpf: Cpf;
  public email: Email;
  public admissionDate: Date;
  public status: RegistrationStatus;

  constructor({
    id,
    employeeName,
    cpf,
    email,
    admissionDate,
    status = RegistrationStatusEnum.REVIEW
  }: RegistrationProps) {
    this.id = id;
    this.employeeName = new EmployeeName(employeeName);
    this.cpf = new Cpf(cpf);
    this.email = new Email(email);
    this.admissionDate = new Date(admissionDate);

    if (id) {
      this.status = RegistrationStatusFactory.create(status, this);
    } else {
      this.status = RegistrationStatusFactory.create(RegistrationStatusEnum.REVIEW, this);
    }
  }

  get adminssionDateFormated() {
    return this.admissionDate.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }
}

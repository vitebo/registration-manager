import RegistrationStatus, { RegistrationStatusFactory, RegistrationStatusEnum } from "./registration-status"
import  { EmployeeName } from './employee-name'
import { Email } from './email'
import { Cpf } from './cpf'

export class Registration {
    public readonly id
    public employeeName: EmployeeName;
    public cpf: Cpf;
    public email: Email;
    public admissionDate: string;
    public status: RegistrationStatus;

    constructor(
        id: string,
        employeeName: string,
        cpf: string,
        email: string,
        admissionDate: string,
        status: keyof typeof RegistrationStatusEnum
    ) {
        this.id = id;
        this.employeeName = new EmployeeName(employeeName);
        this.cpf = new Cpf(cpf);
        this.email = new Email(email);
        this.admissionDate = admissionDate;
        this.status = RegistrationStatusFactory.create(status, this);
    }
}
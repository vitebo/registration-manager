import RegistrationStatus, { RegistrationStatusFactory, RegistrationStatusEnum } from "./registration-status"

export class Registration {
    public status: RegistrationStatus;

    constructor(
        public readonly id: string,
        public readonly employeeName: string,
        public readonly cpf: string,
        public readonly email: string,
        public readonly admissionDate: string,
        status: keyof typeof RegistrationStatusEnum
    ) {
        this.status = RegistrationStatusFactory.create(status, this);
    }
}
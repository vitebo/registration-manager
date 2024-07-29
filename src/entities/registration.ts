export class Registration {
    constructor(
        public readonly id: string,
        public readonly employeeName: string,
        public readonly cpf: string,
        public readonly email: string,
        public readonly admissionDate: string,
        public readonly status: string
    ) {}
}
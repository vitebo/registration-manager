export class CpfEmptyError extends Error {
    name = "CpfEmptyError";

    constructor() {
        super("Cpf cannot be empty");
    }
}

export class CpfLengthError extends Error {
    name = "CpfLengthError";

    constructor() {
        super("Cpf must have 11 digits");
    }
}

export class CpfFormatError extends Error {
    name = "CpfFormatError";

    constructor() {
        super("Invalid cpf format");
    }
}

export class Cpf {
    static LENGTH = 11;

    constructor (readonly value: string) {
        this.validateIsEmpty(value)
        this.validateLength(value)
        this.validateAllDigitsAreTheSame(value)
        this.validateFormat(value)
    }

    private validateIsEmpty (cpf: string) {
        if (cpf === "") {
            throw new CpfEmptyError();
        }
    }

    private validateLength (cpf: string) {
        if (cpf.length !== 11) {
            throw new CpfLengthError();
        }
    }

    private validateAllDigitsAreTheSame (cpf: string) {
        const allDigistsAreTheSame = cpf.split("").every(c => c === cpf[0]);
        if (allDigistsAreTheSame) {
            throw new CpfFormatError();
        }
    }

    private validateFormat (cpf: string) {
        const dg1 = this.calculateDigit(cpf, 10);
        const dg2 = this.calculateDigit(cpf, 11);
        const isValid = this.extractCheckDigit(cpf) === `${dg1}${dg2}`;
        if (!isValid) {
            throw new CpfFormatError();
        }
    }

    private calculateDigit (cpf: string, factor: number) {
        let total = 0;
        for (const digit of cpf) {
            if (factor > 1) total += parseInt(digit) * factor--;
        }
        const rest = total%11;
        return (rest < 2) ? 0 : 11 - rest;
    }

    private extractCheckDigit (cpf: string) {
        return cpf.slice(9);
    }
}
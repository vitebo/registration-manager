export class EmailEmptyError extends Error {
    name = "EmailEmptyError";

    constructor() {
        super("Email cannot be empty");
    }
}

export class EmailFormatError extends Error {
    name = "EmailFormatError";

    constructor() {
        super("Invalid email format");
    }
}

export class Email {
    constructor (readonly value: string) {
        this.validateEmpty(value)
        this.validateFormat(value)
    }

    private validateEmpty (value: string) {
        if (value === "") {
            throw new EmailEmptyError();
        }
    }

    private validateFormat (value: string) {
        if (!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            throw new EmailFormatError();
        }
    }
}
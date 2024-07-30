export class Email {
    constructor (readonly value: string) {
        if (this.isInvalidEmail(value)) throw new Error("Invalid email");
    }

    isInvalidEmail (value: string) {
        return !value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    }
}
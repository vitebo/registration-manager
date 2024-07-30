export class EmployeeNameFirstLetterIsNumberError extends Error {
    name = "EmployeeNameFirstLetterIsNumberError";

    constructor() {
        super("First name letter cannot be a number");
    }
}

export class EmployeeNameEmptyError extends Error {
    name = "EmployeeNameEmptyError";

    constructor() {
        super("Name cannot be empty");
    }
}

export class EmployeeNameDontHaveMoreThanOneNameError extends Error {
    name = "EmployeeNameDontHaveMoreThanOneNameError";

    constructor() {
        super("Name must have more than one name");
    }
}

export class EmployeeName {
    constructor (readonly value: string) {
        const names = value.split(" ");
        this.validateHaveMoreThanOneName(names)
        this.validateHasEmptyName(names)
        this.validateFirstLetterIsNumber(names)
    }

    private validateHaveMoreThanOneName(names: string[]) {
        if (names.length <= 1) {
            throw new EmployeeNameDontHaveMoreThanOneNameError();
        }
    }

    private validateHasEmptyName(names: string[]) {
        const isEmpty = names.some(name => {
            if (name === "") return true;
        })
        if (isEmpty) throw new EmployeeNameEmptyError();
    }

    private validateFirstLetterIsNumber (names: string[]) {
        const [firstName] = names;
        if (this.isNumber(firstName.charAt(0))) {
            throw new EmployeeNameFirstLetterIsNumberError();
        }
    }

    private isNumber(name: string) {
        return !isNaN(Number(name));
    }
}
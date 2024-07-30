export class EmployeeName {
    constructor (readonly value: string) {
        if (this.isInvalidName(value)) throw new Error("Invalid name");
    }

    isInvalidName (value: string) {
        const names = value.split(" ");
        if (!this.haveMoreThanOneName(names)) return true;
        if (this.hasEmptyName(names)) return true;
        const [firstName] = names;
        return this.firstLetterIsNumber(firstName);
    }

    private haveMoreThanOneName(names: string[]) {
        return names.length > 1;
    }

    private hasEmptyName(names: string[]) {
        return names.some(name => {
            if (name === "") return true;
        })
    }

    private firstLetterIsNumber (name: string) {
        return this.isNumber(name.charAt(0));
    }

    private isNumber(name: string) {
        return !isNaN(Number(name));
    }
}
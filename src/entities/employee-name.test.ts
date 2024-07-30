import {
    EmployeeName,
    EmployeeNameFirstLetterIsNumberError,
    EmployeeNameEmptyError,
    EmployeeNameDontHaveMoreThanOneNameError
} from './employee-name'

describe('Entities > Employee Name', () => {
    test("should create an Employee Name with valid value", () => {
        const name = new EmployeeName("John Doe");
        expect(name.value).toBe("John Doe");
    });

    test("should create an Employee Name with numbers", () => {
        const name = new EmployeeName("John Doe 54");
        expect(name.value).toBe("John Doe 54");
    });

    test("should create an Employee Name with many spaces", () => {
        const name = new EmployeeName("John Doe John Doe");
        expect(name.value).toBe("John Doe John Doe");
    });

    test("should not create an Employee Name with single name", () => {
        expect(() => new EmployeeName("John")).toThrow(new EmployeeNameDontHaveMoreThanOneNameError());
    });

    test("should not create an Employee Name without lastname", () => {
        expect(() => new EmployeeName("John ")).toThrow(new EmployeeNameEmptyError());
    });

    test("should not create an Employee Name when fisrt letter is a number", () => {
        expect(() => new EmployeeName("4 John")).toThrow(new EmployeeNameFirstLetterIsNumberError());
    });
})
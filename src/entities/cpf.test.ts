import { Cpf, CpfEmptyError, CpfFormatError, CpfLengthError } from "./cpf";

describe('Entities > CPF', () => {
    test.each([
        "97456321558",
        "71428793860",
        "87748248800"
    ])("should create a CPF with value %s", (cpf) => {
        expect(new Cpf(cpf)).toBeDefined();
    });

    test("should not create a CPF with empty value", () => {
        expect(() => new Cpf("")).toThrow(new CpfEmptyError());
    })

    test("should not create a CPF with less than 11 digits", () => {
        expect(() => new Cpf("1111111111")).toThrow(new CpfLengthError());
    })

    test("should not create a CPF with more than 11 digits", () => {
        expect(() => new Cpf("111111111111")).toThrow(new CpfLengthError());
    })

    test("should not create a CPF with all digits the same", () => {
        expect(() => new Cpf("11111111111")).toThrow(new CpfFormatError());
    })

    test("should not create a CPF with invalid check digits", () => {
        expect(() => new Cpf("11111111112")).toThrow(new CpfFormatError());
    })
})
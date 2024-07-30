import { Cpf } from "./cpf";

describe('Entities > CPF', () => {
    test.each([
        "97456321558",
        "71428793860",
        "87748248800"
    ])("should create a CPF with value %s", (cpf) => {
        expect(new Cpf(cpf)).toBeDefined();
    });

    test.each([
        "",
        undefined,
        null,
        "11111111111",
        "111",
        "11111111111111"
    ])("should not create a CPF with value %s", (cpf) => {
        expect(() => new Cpf(cpf as string)).toThrow(new Error("Invalid cpf"));
    });
})
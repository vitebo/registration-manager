import { Email } from "./email";

describe('Entities > CPF', () => {
    test.each([
        'joao.silva@example.com',
        'maria_oliveira@example.org',
        'carlos-almeida123@example.net',
        'ana.souza+test@example.co.uk',
        'pedro.123@example.travel',
    ])("should create a email with value %s", (email) => {
        expect(new Email(email)).toBeDefined();
    });

    test.each([
        'joao.silva@@example.com',
        'maria_oliveiraexample.org',
        'carlos-almeida123@.net',
        'pedro.123@example',
    ])("should not create a email with value %s", (email) => {
        expect(() => new Email(email as string)).toThrow(new Error("Invalid email"));
    });
})
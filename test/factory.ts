import {Registration} from "~/entities/registration.ts";
import {fakerPT_BR as faker} from "@faker-js/faker";
import {generate as generateCpf} from "gerador-validador-cpf";
import {RegistrationStatusEnum} from "~/entities/registration-status.ts";

export class RegistrationFactory {
    static create({
        id = faker.string.uuid(),
        name = faker.person.fullName(),
        cpf = generateCpf(),
        email = faker.internet.email(),
        admissionDate = faker.date.recent({days: 10}).toString(),
        status = faker.helpers.enumValue(RegistrationStatusEnum),
    } = {}) {
        return new Registration(
            id,
            name,
            cpf,
            email,
            admissionDate,
            status,
        );
    }
}
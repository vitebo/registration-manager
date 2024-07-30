import { fakerPT_BR as faker } from '@faker-js/faker';
import { generate as generateCpf } from 'gerador-validador-cpf'

import { Registration } from './registration'
import {RegistrationStatusEnum, RegistrationStatusFactory} from './registration-status'

describe('Entities > Registration Status', () => {
    describe('when status is "REVIEW"', () => {
        it('should can move to "APPROVED"', () => {
            const registation = new Registration(
                faker.string.uuid(),
                faker.person.fullName(),
                generateCpf(),
                faker.internet.email(),
                faker.date.recent({ days: 10 }).toString(),
                RegistrationStatusEnum.REVIEW,
            );
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            status.approve();
            expect(registation.status.value).toBe(RegistrationStatusEnum.APPROVED);
        })

        it('should can move to "REPROVED"', () => {
            const registation = new Registration(
                faker.string.uuid(),
                faker.person.fullName(),
                generateCpf(),
                faker.internet.email(),
                faker.date.recent({ days: 10 }).toString(),
                RegistrationStatusEnum.REVIEW,
            );
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            status.reprove();
            expect(registation.status.value).toBe(RegistrationStatusEnum.REPROVED);
        })

        it('should can`t move to "REVIEW"', () => {
            const registation = new Registration(
                faker.string.uuid(),
                faker.person.fullName(),
                generateCpf(),
                faker.internet.email(),
                faker.date.recent({ days: 10 }).toString(),
                RegistrationStatusEnum.REVIEW,
            );
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            expect(() => status.review()).toThrow(new Error("Invalid status"));
            expect(registation.status.value).toBe(RegistrationStatusEnum.REVIEW);
        })
    })

    describe('when status is "APPROVED"', () => {
        it('should can`t move to "APPROVED"', () => {
            const registation = new Registration(
                faker.string.uuid(),
                faker.person.fullName(),
                generateCpf(),
                faker.internet.email(),
                faker.date.recent({ days: 10 }).toString(),
                RegistrationStatusEnum.APPROVED,
            );
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            expect(() => status.approve()).toThrow(new Error("Invalid status"));
            expect(registation.status.value).toBe(RegistrationStatusEnum.APPROVED);
        })

        it('should can`t move to "REPROVED"', () => {
            const registation = new Registration(
                faker.string.uuid(),
                faker.person.fullName(),
                generateCpf(),
                faker.internet.email(),
                faker.date.recent({ days: 10 }).toString(),
                RegistrationStatusEnum.APPROVED,
            );
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            expect(() => status.reprove()).toThrow(new Error("Invalid status"));
            expect(registation.status.value).toBe(RegistrationStatusEnum.APPROVED);
        })

        it('should can move to "REVIEW"', () => {
            const registation = new Registration(
                faker.string.uuid(),
                faker.person.fullName(),
                generateCpf(),
                faker.internet.email(),
                faker.date.recent({ days: 10 }).toString(),
                RegistrationStatusEnum.APPROVED,
            );
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            status.review();
            expect(registation.status.value).toBe(RegistrationStatusEnum.REVIEW);
        })
    })

    describe('when status is "REPROVED"', () => {
        it('should can`t move to "APPROVED"', () => {
            const registation = new Registration(
                faker.string.uuid(),
                faker.person.fullName(),
                generateCpf(),
                faker.internet.email(),
                faker.date.recent({ days: 10 }).toString(),
                RegistrationStatusEnum.REPROVED,
            );
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            expect(() => status.approve()).toThrow(new Error("Invalid status"));
            expect(registation.status.value).toBe(RegistrationStatusEnum.REPROVED);
        })

        it('should can`t move to "REPROVED"', () => {
            const registation = new Registration(
                faker.string.uuid(),
                faker.person.fullName(),
                generateCpf(),
                faker.internet.email(),
                faker.date.recent({ days: 10 }).toString(),
                RegistrationStatusEnum.REPROVED,
            );
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            expect(() => status.reprove()).toThrow(new Error("Invalid status"));
            expect(registation.status.value).toBe(RegistrationStatusEnum.REPROVED);
        })

        it('should can move to "REVIEW"', () => {
            const registation = new Registration(
                faker.string.uuid(),
                faker.person.fullName(),
                generateCpf(),
                faker.internet.email(),
                faker.date.recent({ days: 10 }).toString(),
                RegistrationStatusEnum.REPROVED,
            );
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            status.review();
            expect(registation.status.value).toBe(RegistrationStatusEnum.REVIEW);
        })
    })
})
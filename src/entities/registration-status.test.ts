import {RegistrationFactory} from "~~/test/factory.ts";

import {RegistrationStatusEnum, RegistrationStatusFactory} from './registration-status'

describe('Entities > Registration Status', () => {
    describe('when status is "REVIEW"', () => {
        it('should can move to "APPROVED"', () => {
            const registation = RegistrationFactory.create({
                status: RegistrationStatusEnum.REVIEW
            })
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            status.approve();
            expect(registation.status.value).toBe(RegistrationStatusEnum.APPROVED);
        })

        it('should can move to "REPROVED"', () => {
            const registation = RegistrationFactory.create({
                status: RegistrationStatusEnum.REVIEW
            })
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            status.reprove();
            expect(registation.status.value).toBe(RegistrationStatusEnum.REPROVED);
        })

        it('should can`t move to "REVIEW"', () => {
            const registation = RegistrationFactory.create({
                status: RegistrationStatusEnum.REVIEW
            })
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            expect(() => status.review()).toThrow(new Error("Invalid status"));
            expect(registation.status.value).toBe(RegistrationStatusEnum.REVIEW);
        })
    })

    describe('when status is "APPROVED"', () => {
        it('should can`t move to "APPROVED"', () => {
            const registation = RegistrationFactory.create({
                status: RegistrationStatusEnum.APPROVED
            })
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            expect(() => status.approve()).toThrow(new Error("Invalid status"));
            expect(registation.status.value).toBe(RegistrationStatusEnum.APPROVED);
        })

        it('should can`t move to "REPROVED"', () => {
            const registation = RegistrationFactory.create({
                status: RegistrationStatusEnum.APPROVED
            })
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            expect(() => status.reprove()).toThrow(new Error("Invalid status"));
            expect(registation.status.value).toBe(RegistrationStatusEnum.APPROVED);
        })

        it('should can move to "REVIEW"', () => {
            const registation = RegistrationFactory.create({
                status: RegistrationStatusEnum.APPROVED
            })
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            status.review();
            expect(registation.status.value).toBe(RegistrationStatusEnum.REVIEW);
        })
    })

    describe('when status is "REPROVED"', () => {
        it('should can`t move to "APPROVED"', () => {
            const registation = RegistrationFactory.create({
                status: RegistrationStatusEnum.REPROVED
            })
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            expect(() => status.approve()).toThrow(new Error("Invalid status"));
            expect(registation.status.value).toBe(RegistrationStatusEnum.REPROVED);
        })

        it('should can`t move to "REPROVED"', () => {
            const registation = RegistrationFactory.create({
                status: RegistrationStatusEnum.REPROVED
            })
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            expect(() => status.reprove()).toThrow(new Error("Invalid status"));
            expect(registation.status.value).toBe(RegistrationStatusEnum.REPROVED);
        })

        it('should can move to "REVIEW"', () => {
            const registation = RegistrationFactory.create({
                status: RegistrationStatusEnum.REPROVED
            })
            const status = RegistrationStatusFactory.create(registation.status.value, registation);
            status.review();
            expect(registation.status.value).toBe(RegistrationStatusEnum.REVIEW);
        })
    })
})
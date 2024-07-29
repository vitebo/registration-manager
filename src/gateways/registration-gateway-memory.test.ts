import { faker } from '@faker-js/faker';

import {RegistrationGatewayMemory} from "~/gateways/registration-gateway-memory.ts";
import {Registration} from "~/entities/registration.ts";

describe('Gateways > Registrations Memory', () => {
    it('starts with no registrations', async () => {
        const gateway = new RegistrationGatewayMemory();
        const registrations = await gateway.get();
        expect(registrations).toEqual([]);
    })

    it('creates a registration', async () => {
        const gateway = new RegistrationGatewayMemory();
        const registation = new Registration(
            faker.string.uuid(),
            faker.person.fullName(),
            '123',
            faker.internet.email(),
            faker.date.recent({ days: 10 }).toString(),
            faker.internet.httpMethod(),
        );
        await gateway.create(registation);
        const registrations = await gateway.get();
        expect(registrations).toEqual([registation]);
    })

    it('deletes a registration', async () => {
        const gateway = new RegistrationGatewayMemory();
        const registation = new Registration(
            faker.string.uuid(),
            faker.person.fullName(),
            '123',
            faker.internet.email(),
            faker.date.recent({ days: 10 }).toString(),
            faker.internet.httpMethod(),
        );
        await gateway.create(registation);
        await gateway.delete(registation);
        const registrations = await gateway.get();
        expect(registrations).toEqual([]);
    })

    it('updates a registration', async () => {
        const gateway = new RegistrationGatewayMemory();
        const registation = new Registration(
            faker.string.uuid(),
            faker.person.fullName(),
            '123',
            faker.internet.email(),
            faker.date.recent({ days: 10 }).toString(),
            faker.internet.httpMethod(),
        );
        await gateway.create(registation);
        const updatedRegistration = new Registration(
            faker.string.uuid(),
            faker.person.fullName(),
            '123',
            faker.internet.email(),
            faker.date.recent({ days: 10 }).toString(),
            faker.internet.httpMethod(),
        );
        await gateway.update(updatedRegistration);
        const registrations = await gateway.get();
        expect(registrations).toEqual([updatedRegistration]);
    });
})
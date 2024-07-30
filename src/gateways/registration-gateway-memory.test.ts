import { RegistrationFactory } from '~~/test/factory'

import {RegistrationGatewayMemory} from "~/gateways/registration-gateway-memory.ts";

describe('Gateways > Registrations Memory', () => {
    it('starts with no registrations', async () => {
        const gateway = new RegistrationGatewayMemory();
        const registrations = await gateway.get();
        expect(registrations).toEqual([]);
    })

    it('creates a registration', async () => {
        const gateway = new RegistrationGatewayMemory();
        const registation = RegistrationFactory.create();
        await gateway.create(registation);
        const registrations = await gateway.get();
        expect(registrations).toEqual([registation]);
    })

    it('deletes a registration', async () => {
        const gateway = new RegistrationGatewayMemory();
        const registation = RegistrationFactory.create();
        await gateway.create(registation);
        await gateway.delete(registation);
        const registrations = await gateway.get();
        expect(registrations).toEqual([]);
    })

    it('updates a registration', async () => {
        const gateway = new RegistrationGatewayMemory();
        const registation = RegistrationFactory.create();
        await gateway.create(registation);
        const updatedRegistration = RegistrationFactory.create()
        await gateway.update(updatedRegistration);
        const registrations = await gateway.get();
        expect(registrations).toEqual([updatedRegistration]);
    });
})
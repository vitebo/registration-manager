import { createContext } from "react";
import {RegistrationGateway} from "~/gateways/registration-gateway.ts";
import { RegistrationGatewayMemory } from '~/gateways/registration-gateway-memory'

interface DiContextValue {
    registrationGateway: RegistrationGateway;
}

export const DiContext = createContext<DiContextValue>({
    registrationGateway: new RegistrationGatewayMemory(),
});

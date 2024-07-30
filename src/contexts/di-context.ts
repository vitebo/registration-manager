import { createContext } from "react";
import {RegistrationGateway} from "~/gateways/registration-gateway.ts";

interface DiContextValue {
    registrationGateway: RegistrationGateway;
}

export const DiContext = createContext<DiContextValue | undefined>(undefined);

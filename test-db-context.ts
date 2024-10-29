import { mockDeep, DeepMockProxy } from "jest-mock-extended"
import { extendedClientType } from "~/services/database.server";

export type Context = {
    prisma: extendedClientType
}

export type MockContext = {
    prisma: DeepMockProxy<extendedClientType>
}

export const createMockContext = (): MockContext => {
    return {
        prisma: mockDeep<extendedClientType>(),
    }
}
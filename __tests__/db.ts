import { mock } from "jest-mock-extended";
import { MockContext, Context, createMockContext } from "../test-db-context";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

describe("Database", () => {
  describe("Model: User", () => {
    const userObject = {
      id: "cm2togv8b000008l8aqoh58wc",
      username: "jay",
      email: "jeepies@snipbunny.com",
      password: "password",
    };

    test("Action: Create", async () => {
      mockCtx.prisma.user.create.mockResolvedValue(userObject);

      const result = ctx.prisma.user.create({ data: userObject });

      await expect(result).resolves.toEqual(userObject);
    });

    test("Action: findFirst", async () => {
      await ctx.prisma.user.create({ data: userObject });

      userObject.password = "******";
      mockCtx.prisma.user.findFirst.mockResolvedValue(userObject);

      const result = ctx.prisma.user.findFirst({ where: { username: "jay" } });

      await expect(result).resolves.toEqual({
        id: "cm2togv8b000008l8aqoh58wc",
        username: "jay",
        email: "jeepies@snipbunny.com",
        password: "******",
      });
    });
  });
});

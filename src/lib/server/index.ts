import { inferRouterOutputs, inferRouterInputs } from '@trpc/server';

import { publicProcedure, router } from './trpc';

export const appRouter = router({
  test: publicProcedure.query(() => 'test'),
});

export type AppRouter = typeof appRouter;
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;

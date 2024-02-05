import { initTRPC } from '@trpc/server';

import { TRPCContext } from '@/types';

export const t = initTRPC.context<TRPCContext>().create();

// const isAuthMiddleware = t.middleware(async (opts) => {
// const session = await auth();
// if (!session || !session.user) {
//   throw new TRPCError({ code: 'UNAUTHORIZED' });
// }
// return opts.next({ ...opts, ctx: { ...opts.ctx, session } });
// });

export const router = t.router;
export const publicProcedure = t.procedure;
// export const privateProcedure = t.procedure.use(isAuthMiddleware);

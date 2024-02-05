import { httpBatchLink } from '@trpc/client';

export interface TRPCContext {
  links: ReturnType<typeof httpBatchLink>[];
}

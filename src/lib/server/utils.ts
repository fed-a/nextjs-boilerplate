import { httpBatchLink } from '@trpc/client';

export const batchLinks = [
  httpBatchLink({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/trpc`,
  }),
];

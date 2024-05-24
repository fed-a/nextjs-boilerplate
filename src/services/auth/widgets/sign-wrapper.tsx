import React, { PropsWithChildren } from 'react';

export function SignWrapper({ children }: PropsWithChildren) {
  return <div className="absolute bottom-0 left-0 right-0 top-0 grid place-items-center">{children}</div>;
}

import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { MainLayout } from '@core/layouts/main-layout';

import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>;
}

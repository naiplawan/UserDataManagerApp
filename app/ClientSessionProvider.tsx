'use client'

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface Props {
  children: React.ReactNode;
  session?: Session | null;
}

const ClientSessionProvider = ({ children, session }: Props) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default ClientSessionProvider

import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <div className={'min-h-screen p-10'}>
      <Link href={'/'} className={'hover:text-blue-500'}>
        Home
      </Link>

      <main>{children}</main>
    </div>
  );
}

import { Inter } from '@next/font/google';

import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={inter.variable}>
      <head />
      <body>{children}</body>
    </html>
  );
}

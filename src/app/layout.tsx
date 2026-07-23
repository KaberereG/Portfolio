import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Grace Waithera Kaberere — Portfolio',
  description: 'Full-stack developer portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import AnimationProvider from './components/AnimationProvider';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nadiaura AI | The Third Eye for Modern Families',
  description: 'Preventive health AI companion that notices what families miss before it becomes a crisis.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <AnimationProvider />
        {children}
      </body>
    </html>
  );
}

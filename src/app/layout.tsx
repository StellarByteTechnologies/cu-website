import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Diara Care',
  description: 'Project CU',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} light`}>
      <head>
        {/* Prevent forced dark mode */}
        <meta name="color-scheme" content="light only" />
      </head>
      <body className="antialiased font-poppins min-h-screen flex flex-col bg-white text-black dark:bg-white dark:text-black">
        <Navbar />
        <main className="flex-grow overflow-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

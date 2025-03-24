import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

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
        {/* Ensure proper mobile scaling */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Prevent forced dark mode from altering colors */}
        <meta name="color-scheme" content="light only" />
      </head>
      <body className="antialiased font-poppins min-h-screen flex flex-col bg-white text-black">
        <Navbar />
        <main className="flex-grow min-h-[80vh] px-4 sm:px-6 md:px-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

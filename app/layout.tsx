// app/layout.tsx
import '../styles/globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'EthicBasket',
  description: 'Proof Over Promise. Commerce With Conscience.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-gray-900 font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}



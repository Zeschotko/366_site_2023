import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-poppins',
});

export const metadata = {
    title: '366 Detalhamento Automotivo',
    description: 'Cuidar do seu carro nunca foi tão facil.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    );
}

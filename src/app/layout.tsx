import type { Metadata } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600'], display: 'swap', variable: '--font-inter' });
const plex  = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], display: 'swap', variable: '--font-plex' });

export const metadata: Metadata = {
  title: 'Fractalysium',
  description: 'Fractalysium développe des systèmes de renseignement satellitaire pour les agences publiques européennes, la sécurité civile et les opérateurs d\'infrastructures critiques.',
  keywords: 'satellite intelligence, geospatial intelligence, earth observation, cognitive AI, Copernicus, European intelligence',
  openGraph: {
    title: 'Fractalysium',
    description: 'Satellite intelligence for European decision makers. Built on Copernicus. Governed by EU law.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // lang="en" allows all browsers to offer automatic translation
    <html lang="fr" className={`${inter.variable} ${plex.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
        <meta name="theme-color" content="#ffffff"/>
      </head>
      <body>{children}</body>
    </html>
  );
}

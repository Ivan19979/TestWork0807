import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navbar } from '@/components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Прогноз погоды по городам мира',
  description: 'Проверьте текущую погоду и прогноз погоды в вашем городе',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Прогноз погоды по городам мира" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shchurupoff" />
        <meta name="twitter:creator" content="@shchurupoff" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="container py-4">{children}</main>
      </body>
    </html>
  );
}
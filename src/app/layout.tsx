import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navbar } from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Прогноз погоды по городам мира",
  description: "Проверьте текущую погоду и прогноз погоды в вашем городе",
  icons: "/favicon.png",
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Прогноз погоды по городам мира",
    description: "Проверьте текущую погоду и прогноз погоды в вашем городе",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    images: [
      {
        url: "/weather.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Прогноз погоды по городам мира",
    description: "Проверьте текущую погоду и прогноз погоды в вашем городе",
    images: ["/weather.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
        {/* <link rel="apple-touch-icon" href="/favicon.png" type="image/png" /> */}
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="container py-4">{children}</main>
      </body>
    </html>
  );
}

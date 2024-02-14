import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://exclusive-games-lemon.vercel.app/",
  title: "Exclusive Games",
  description: "EXCLUSIVE GAMES. PASIÓN POR GANAR",
  openGraph: {
    title: "Exclusive Games",
    description: "EXCLUSIVE GAMES. PASIÓN POR GANAR",
    images: ["/meta-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

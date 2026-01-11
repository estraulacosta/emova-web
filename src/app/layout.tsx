import type { Metadata } from "next";
import { Playfair_Display, Libre_Baskerville, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const notoSans = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "EMOVA | Activación Neuro-Emocional",
  description: "Donde la tecnología termina, nosotros empezamos. Activación Neuro-Emocional exclusiva.",
  icons: {
    icon: "/assets/icono.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${libreBaskerville.variable} ${notoSans.variable} antialiased bg-white text-[#575756]`}
      >
        {children}
      </body>
    </html>
  );
}

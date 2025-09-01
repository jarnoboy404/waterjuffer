import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SWRSessionStorage from "@/components/SWRSessionStorage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waterjuffer",
  description: "De zwemschool voor PRIVE LES en persoonlijke aandacht!",
  other: {
    "theme-color": "#009BB3",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
  keywords: [
    "Zwemschool",
    "Zwemles",
    "Kinderzwemles",
    "Privé zwemles",
    "Zwemles op maat",
    "Zwemlessen voor kinderen",
    "Zwemvaardigheid",
    "Zwemtechniek verbeteren",
    "Veilig leren zwemmen",
    "Zwemopleiding",
    "Zwemtraining",
    "Zwemkampen",
    "Zwemactiviteiten",
    "Zwemdocent",
    "Persoonlijke aandacht zwemles",
    "Zwemplezier kinderen",
    "Waterangst zwemles",
    "Faalangst zwemles",
    "ADHD zwemles",
    "Zwemles voor autisme",
    "Syndroom van Down zwemles",
    "Motorische beperking zwemles",
    "Speciale behoeften zwemles",
    "Zwemprogramma’s kinderen",
    "Zwemschool in de buurt",
    "Beetsterzwaag zwemschool",
    "Helomareed zwemschool",
    "Jelma Donker zwemschool",
    "ENVOZ zwemdiploma",
    "Zwemles voor beginners",
    "Zwemles voor gevorderden",
    "Kinderzwemtraining",
    "Zwemactiviteiten op maat",
    "Privé zwemtraining kinderen",
    "Zwemles met persoonlijke begeleiding",
  ],
  category: "Zwemschool",
  authors: [{ name: "Jelma Donker", url: "https://www.waterjuffer.nl/" }],
  creator: "Jelma Donker",
  publisher: "Jelma Donker",
  openGraph: {
    title: "Waterjuffer",
    description: "De zwemschool voor PRIVE LES en persoonlijke aandacht!",
    url: "https://www.waterjuffer.nl/",
    siteName: "Waterjuffer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <SWRSessionStorage>{children}</SWRSessionStorage>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

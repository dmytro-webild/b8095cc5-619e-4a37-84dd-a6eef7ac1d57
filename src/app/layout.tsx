import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Apex Juris | Cultivating Future Leaders in Justice',
  description: 'Empowering ambitious youth with critical thinking, public speaking, and legal reasoning to become the next generation of civic leaders and human rights advocates.',
  openGraph: {
    "title": "Apex Juris | Youth Justice & Civic Leadership",
    "description": "Empowering ambitious youth with critical thinking, public speaking, and legal reasoning to become the next generation of civic leaders and human rights advocates.",
    "url": "https://www.apexjuris.org",
    "siteName": "Apex Juris",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/vertical-low-angle-shot-building-with-concrete-stairs-beautiful-carvings-roubaix-france_181624-16665.jpg",
        "alt": "Scales of Justice in Grand Hall"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Apex Juris | Youth Justice & Civic Leadership",
    "description": "Empowering ambitious youth with critical thinking, public speaking, and legal reasoning to become the next generation of civic leaders and human rights advocates.",
    "images": [
      "http://img.b2bpic.net/free-photo/vertical-low-angle-shot-building-with-concrete-stairs-beautiful-carvings-roubaix-france_181624-16665.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${openSans.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}

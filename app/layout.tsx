
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StickyHeader from "@/components/layout/StickyHeader";
import StickyFooter from "@/components/layout/StickyFooter";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "London Cafe Admin Panel",
  description: "Admin panel for managing London Cafe branches, menu, orders, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <body className={`font-sans antialiased flex flex-col min-h-screen ${poppins.variable} `} >
        <StickyHeader />
        <main className="flex-1 pt-16"> {/* Add padding-top to account for sticky header */}
          {children}
        </main>
        <StickyFooter />
      </body>
    </html>
  );
}

"use client"
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StickyHeader from "@/components/layout/StickyHeader";
import StickyFooter from "@/components/layout/StickyFooter";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')
  return (
    <html lang="en" suppressHydrationWarning>
       <body className={`font-sans antialiased flex flex-col min-h-screen ${poppins.variable} `} >
       {!isAdminRoute && <StickyHeader /> }
        <main className="flex-1 pt-16"> {/* Add padding-top to account for sticky header */}
          {children}
        </main>
        {!isAdminRoute && <StickyFooter />}
      </body>
    </html>
  );
}

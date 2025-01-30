import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christal Sofia",
  description: "A simple portfolio.",
  icons: "/images/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='antialiased scroll-smooth'>
      <body className="min-w-[320px]">
        {children}
      </body>
    </html>
  );
}

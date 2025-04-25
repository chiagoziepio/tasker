import type { Metadata } from "next";
import { Roboto, Poppins, Playfair } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});
const playfair = Playfair({
  weight: ["400", "500", "700"],
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tasker",
  description: "Your project best buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${roboto.className} ${poppins.className} ${playfair.className} antialiased overflow-x-hidden overflow-y-auto`}
      >
        {children}
      </body>
    </html>
  );
}

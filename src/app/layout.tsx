import "./global.css";
import { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";

const Sofia = Sofia_Sans({
  subsets: ["latin"],
  variable: "--sofia_sans",
  weight: ["200", "300", "400"],
});

export const metadata: Metadata = {
  title: "Welcome to my Dapp",
  description: "This site was created using the NextJS framework 🚀",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Sofia.className}>{children}</body>
    </html>
  );
}

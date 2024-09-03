import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Hearder from "@/components/Hearder";

import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "MERN Developer",
  description: "MY portfolio as a MERN Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Hearder />
        <StairTransition/>
        <PageTransition>
        {children}
        </PageTransition>
      </body>
    </html>
  );
}

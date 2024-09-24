import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Intextify",
  description: "Unravel the insights from documents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

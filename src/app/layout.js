import Footer from "@/components/footer/Footer";
import { Inter } from "next/font/google";
import Navbar from "../components/navBar/Navbar";
import "./globals.css";
// import { ThemeProvider } from '../../context/ThemeContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Agency",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider> */}
        <main className="max-w-6xl mx-auto">
          <Navbar />
          {children}
          <Footer />
        </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Rental App",
  author: "Mostafa M.Ebrahem",
  keyWords: [
    "Car Rental",
    "Next.js",
    "Tailwind CSS",
    "Car Booking",
    "Car Hire",
    "Automobile Rental",
    "Vehicle Rental",
    "Car Sharing",
    "Car Reservation",
    "Car Leasing",
    "Car Rental Service",
    "Car Rental Application",
    "Car Rental Platform",
    "Car Rental Website",
    "Car Rental System",
    "Car Rental Software",
    "Car Rental Solutions",
    "Car Rental Experience",
    "Car Rental Industry",
    "Car Rental Business",
    "Car Rental Technology",

  ],

  description:
    "A modern car rental application built with Next.js and Tailwind CSS for seamless car booking experiences. Browse, select, and rent cars with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Navbar />
        <main className="py-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cedarville_Cursive } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";



const cedarville = Cedarville_Cursive({
    variable: "--font-cedarville",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Space Portfolio",
    description: "This is my portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${cedarville.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden antialiased`}
            >
                <StarsCanvas />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

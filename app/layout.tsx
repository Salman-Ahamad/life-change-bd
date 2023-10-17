import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FC } from "react";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "@/components";
import { IChildren } from "@/interface";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Life Change BD",
  description:
    "It is an Bangladeshi trusted online platform. It is a learning and earning process by using your valuable free time at home through your smart phone only It is a very easy process and you can learn this process on your own mother tongue and you can earn from our community with selling some Courses Services or product also. Here you make your career smoothly.",
  openGraph: {
    title: "Life Change BD",
    description:
      "It is an Bangladeshi trusted online platform. It is a learning and earning process by using your valuable free time at home through your smart phone only It is a very easy process and you can learn this process on your own mother tongue and you can earn from our community with selling some Courses Services or product also. Here you make your career smoothly.",
    url: "https://www.lifechangebd.com/logo-life_change_bd.png",
    siteName: "Life Change BD",
    images: [
      {
        url: "https://www.lifechangebd.com/logo-life_change_bd.png",
        width: 600,
        height: 300,
        alt: "WELCOME TO LIFE CHANGE BD E-LEARNING PLATFORM",
      },
      {
        url: "https://www.lifechangebd.com/logo-life_change_bd_original.png",
        width: 600,
        height: 600,
        alt: "WELCOME TO LIFE CHANGE BD E-LEARNING PLATFORM",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const RootLayout: FC<IChildren> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <AuthProvider>
        {children}
        <ToastContainer />
      </AuthProvider>
    </body>
  </html>
);

export default RootLayout;

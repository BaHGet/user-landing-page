import type { Metadata } from "next";;
import "./globals.css";
import NavBar from "./Components/navBar";


export const metadata: Metadata = {
  title: "User landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-row ">
        <NavBar />
        {children}
      </body>
    </html>
  );
}

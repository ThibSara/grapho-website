import { Urbanist } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";
import Cursor from '../component/cursor'


const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Grapho78",
  description: "Un site web sur la graphothérapie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Cursor />
      <Navigation/>
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}

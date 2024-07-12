import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chasse au trésor",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}

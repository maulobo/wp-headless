import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./components/context";
import Header from "./components/layout/header";
import getHedader from "./components/getHeader";
import { head } from "lodash";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nexts WooCommerce",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const { props } = await getHedader();
  const headerFooter = props.headerFooter;
  const { header } = headerFooter;

  return (
    <AppProvider>
      <html lang="en">
        <body className="container mx-auto py-4 min-h-50vh">
          <Header header={header} />
          {children}
        </body>
      </html>
    </AppProvider>
  );
}

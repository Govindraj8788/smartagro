// app/layout.js
import "./globals.css";
import Providers from "./providers/Providers";
import { CartProvider } from "./providers/CartProvider";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "FarmaX",
  description: "Smart Agriculture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Navbar />

          <main className="flex-1 w-full">
            <CartProvider>{children}</CartProvider>
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TaxSonic Global | Tax & Business Services",
  description:
    "Professional tax, GST, and compliance services for India, NRIs, and global clients.",
  verification: {
    google: "oBGIjwjQwuZ1Geg3CZfXVEUaEz0RaQOsrAqAYCOBr5c",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

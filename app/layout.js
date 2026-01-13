import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import ExitIntent from "@/components/ExitIntent";

export const metadata = {
  title: "TaxSonic Global | Tax & Compliance for India, NRIs & Global Clients",
  description:
    "Company registration, GST, income tax filing, and compliance services for India, NRIs, and global clients. Lucknow, Uttar Pradesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />
        {children}
        <Footer />
        <StickyActions />
        <ExitIntent />
      </body>
    </html>
  );
}
<body>
  {children}
  <Footer />
</body>

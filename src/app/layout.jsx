import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Providers from "./Providers";

// layout.jsx→Header.jsx→DarkModeSwitch.jsxのように孫に渡しているためchildrenを使う
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Providersフォルダは他のとこからimportしている */}
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  );
}

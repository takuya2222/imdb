import Header from "@/components/Header";
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

          {/* SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  );
}

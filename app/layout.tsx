import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";

export const metadata: Metadata = {
  title: { default: "מהמודרה · החותם הגדול", template: "%s · מהמודרה" },
  description: "האתר העברי של מסורת המהמודרה — שושלת, טקסטי שורש מתורגמים מטיבטית, הדרך, ארבע היוגות ומדיטציה מודרכת.",
};

export const viewport: Viewport = { themeColor: "#06070f", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;500;700&family=Heebo:wght@300;400;500;600&family=Noto+Serif+Tibetan:wght@400;600&display=swap"
        />
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='46' fill='%2306070f' stroke='%23d9b45a' stroke-width='4'/%3E%3Ccircle cx='50' cy='50' r='18' fill='%23f1dca0'/%3E%3C/svg%3E" />
      </head>
      <body>
        <Starfield />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

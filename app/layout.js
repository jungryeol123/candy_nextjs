import "./globals.css";

export const metadata = {
  title: "Candy Market",
  description: "Next.js Shopping Mall",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}

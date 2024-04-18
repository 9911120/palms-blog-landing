import "./globals.css";

export const metadata = {
  title: "palms.blog",
  description: "가장 빠른 블로그 빌더",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

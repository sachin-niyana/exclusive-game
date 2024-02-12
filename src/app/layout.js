import "./globals.css";

export const metadata = {
  title: "Exclusive Game",
  Image: "/assets/webp/meta-img.webp",
  description: "Welcome to Exclusive-Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

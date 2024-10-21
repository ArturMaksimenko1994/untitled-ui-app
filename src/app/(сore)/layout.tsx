import '../../../public/fonts/fonts.css';
import '../../styles/app.scss';

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="body">
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
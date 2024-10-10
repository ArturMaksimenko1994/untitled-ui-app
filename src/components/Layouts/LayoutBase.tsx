import '../../../public/fonts/fonts.css';
import '../../styles/app.scss';

export default function LayoutBase({children,}: { children: React.ReactNode }) {
  return (
    <html lang="ru">
    <body id="body">{children}</body>
    </html>
  );
}
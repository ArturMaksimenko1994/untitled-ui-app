import Link from "next/link";
import Button from "@/ui-kit/buttons/Button/Button";

const PageHome = () => {
  return (
    <>
      <h1 className="h1">Главная страница</h1>
      <Link href="/login">
        Логин
      </Link>
      <Link href="/about">
        Страница о нас
      </Link>
      <Link href="/users">
        Пользователи
      </Link>
      <Link href="/public">
        Главная страница
      </Link>
      <h1>Главная страница Артем и Макс</h1>

      <Button
        type="primary"
        htmlElement="link"
        link="about"
        size="sm"
      >
        Button
      </Button>
    </>
  );
};

export default PageHome;
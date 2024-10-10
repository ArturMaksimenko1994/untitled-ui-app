
import styles from "./Header.module.scss";
import Button from "@/ui-kit/buttons/Button/Button";
import Link from "next/link";

const Header = () => {

  return (
    <header className={styles.header}>
      <div className="container xxl">
        <div className={styles.header__row}>

          <img src="/img/logo/Logo-dark.svg" alt=""/>

          <nav className={styles.header__nav}>
            <Link href="#footer">Home</Link>
            <Link href="/">Products</Link>
            <Link href="/">Resources</Link>
            <Link href="/">Pricing</Link>
          </nav>

          <div className={styles.header__aut}>
            <Button
              type="secondary-outline"
              htmlElement="link"
              link="register"
              size="md"
            >
              Log in
            </Button>

            <Button
              type="primary"
              htmlElement="link"
              link="about"
              size="sm"
            >
              Sign up
            </Button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
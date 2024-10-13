import styles from "./login.module.scss";
import Input from "@/ui-kit/inputs/Input/Input";
import Button from "@/ui-kit/buttons/Button/Button"
import Link from "next/link";

const PageLogin = () => {
    return (
        <div className={styles.page}>

            <div className={styles.block}>
                <img className={styles.block__logo} src="/img/logo/logo.svg" alt="logo" />
                <div>Войдите в свою учетную запись</div>
                <div>Добро пожаловать!</div>

                <form action="" className={styles.form}>
                    <div className={styles.form__rom}>
                        <Input
                            type="email"
                            label="Email"
                            placeholder="Адрес электронной почты"
                        />
                        <Input
                            type="Password"
                            label="Password"
                            placeholder="Ваш пароль"
                        />
                    </div>
                    <Button
                        type="primary"
                        size="md"
                        htmlElement="button"
                        buttonType="button"
                        allowFullScreen="full-width"
                    >
                        Авторизоваться
                    </Button>
                </form>
                <p>У вас нет учетной записи? <Link href="register">Регистрация</Link></p>
            </div>
        </div>
    );
};

export default PageLogin;		

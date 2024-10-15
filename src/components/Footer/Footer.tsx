import styles from "./Footer.module.scss";
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.footer__top}>
        <div className="container">

        </div>
      </div>

      <div className={styles.footer__center}>
        <div className="container">
          <Image src="/img/logo/Logo-dark.svg" alt="" />
        </div>
      </div>
      <div className={styles.footer__bottom}></div>
    </footer>
  );
};

export default Footer;
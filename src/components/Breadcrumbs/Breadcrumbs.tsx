"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumbs.module.scss";
import Image from 'next/image'

const Breadcrumbs = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  const pathArray = pathname.split("/").filter((path) => path);

  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ul>
        <li>
        <Link href="/">
            <Image
              className={styles.header__logo}
              src="/icons/Home.svg"
              alt="logo"
              width={20}
              height={20}
            />
          </Link>
        </li>
        {pathArray.map((path, index) => {
          const href = "/" + pathArray.slice(0, index + 1).join("/");
          const isLast = index === pathArray.length - 1;
          return (
            <li key={index}>
              {isLast ? (
                <span>{path.replace("-", " ")}</span>
              ) : (
                <Link href={href}>{path.replace("-", " ")}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;

import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import css from "./Header.module.scss";

const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <header className={css.header}>
      <Link href="/" className={pathname === "/" ? css.active : ""}>
        Home
      </Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export default Header;

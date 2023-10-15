import { FC, PropsWithChildren } from "react";
import Header from "../Header/Header";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;

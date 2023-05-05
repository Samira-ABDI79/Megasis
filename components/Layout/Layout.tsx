import { ReactNode } from "react";

import { Footer } from "./Footer";
import Navbar from "./Navbar";

interface PropType {
  children: ReactNode;
}

const Layout = ({ children }: PropType) => {
  return (
    <>
      <Navbar />

      <main className="container ">{children}</main>
      {/* <Footer  /> */}
    </>
  );
};

export default Layout;

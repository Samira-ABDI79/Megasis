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




      <div className="container">

        

        

          {children}

    

      </div>
      <Footer />

    </>

  );

};




export default Layout;
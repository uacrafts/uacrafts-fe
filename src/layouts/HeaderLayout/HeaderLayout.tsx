import Header from "../../components/MainScreen/Header/Header.tsx";
import { PropsWithChildren } from "react";
import Footer from "../../components/MainScreen/Footer/Footer.tsx";

const HeaderLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HeaderLayout;

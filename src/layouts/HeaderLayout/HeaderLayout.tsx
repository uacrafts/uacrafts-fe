import Header from "../../components/MainScreen/Header/Header.tsx";
import {PropsWithChildren} from "react";

const HeaderLayout = ({children}:PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderLayout;

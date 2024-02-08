import Header from "../../components/Header/Header.tsx";
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

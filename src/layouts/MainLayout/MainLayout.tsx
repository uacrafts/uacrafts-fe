import Header from "../../components/MainScreen/Header/Header.tsx";
import Footer from "../../components/MainScreen/Footer/Footer.tsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

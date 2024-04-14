import Header from "../../components/MainScreen/Header/Header.tsx";
import Footer from "../../components/MainScreen/Footer/Footer.tsx";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

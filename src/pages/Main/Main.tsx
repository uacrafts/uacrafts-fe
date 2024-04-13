import styles from "./Main.module.scss";
import WaterMark from "../../components/MainScreen/WaterMark/WaterMark.tsx";
import MainImagesSlider from "../../components/MainScreen/MainImagesSlider/MainImagesSlider.tsx";
import Catalogue from "../../components/Catalogue/Catalogue.tsx";
import HeroSectionHero from "../../components/MainScreen/Hero/HeroSectionHero.tsx";
import HeroSectionTitle from "../../components/MainScreen/Title/HeroSectionTitle.tsx";
import BtnScrollDown from "../../components/buttons/BtnScrollDown/BtnScrollDown.tsx";
import Bestsellers from "../../components/Bestsellers/Beastsellers.tsx";
import Feedback from "../../components/Feedback/Feedback.tsx";
import Novelties from "../../components/Noveltys/Novelties.tsx";
import Brands from "../../components/Brands/Brands.tsx";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.mainScreen}>
          <WaterMark />
          <div className={styles.Title}>
            <HeroSectionHero />
          </div>
          <div className={styles.SubTitle}>
            <HeroSectionTitle />
          </div>
          <div className={styles.BtnArea}>
            <BtnScrollDown />
          </div>
          <div className={styles.SliderArea}>
            <MainImagesSlider />
          </div>
          <div className={styles.ImageArea}></div>
        </div>

        <Catalogue />
        <Bestsellers />
        <Novelties />
        <Brands />
        <Feedback />
      </div>
    </div>
  );
};

export default Main;

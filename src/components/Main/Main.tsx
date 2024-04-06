import styles from "./Main.module.scss";
import WaterMark from "../MainScreen/WaterMark/WaterMark.tsx";
import MainImagesSlider from "../MainScreen/MainImagesSlider/MainImagesSlider.tsx";
import Catalogue from "../Catalogue/Catalogue.tsx";
import HeroSectionHero from "../MainScreen/Hero/HeroSectionHero.tsx";
import HeroSectionTitle from "../MainScreen/Title/HeroSectionTitle.tsx";
import BtnScrollDown from "../buttons/BtnScrollDown/BtnScrollDown.tsx";
import Bestsellers from "../Bestsellers/Beastsellers.tsx";
import Feedback from "../Feedback/Feedback.tsx";
import Novelties from "../Noveltys/Novelties.tsx";
import Brands from "../Brands/Brands.tsx";

const Main = () => {
  return (
    <div className={styles.main}>
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
  );
};

export default Main;

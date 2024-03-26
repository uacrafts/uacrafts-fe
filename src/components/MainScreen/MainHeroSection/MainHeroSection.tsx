import styles from "./MainHeroSection.module.scss";
import HeroSectionTitle from "../Title/HeroSectionTitle.tsx";
import HeroSectionHero from "../Hero/HeroSectionHero.tsx";
import BtnScrollDown from "../../buttons/BtnScrollDown/BtnScrollDown.tsx";
// import BtnCallback from "../BtnCallback/BtnCallback.tsx";
const MainHeroSection = () => {
  return (
      <div className={styles.mainHeroSection}>
          <div className={styles.mainHeroContainer}>
              <HeroSectionHero/>
              <HeroSectionTitle/>
              <BtnScrollDown/>
          </div>
          <div className={styles.mainImage}></div>
      </div>
  );
};

export default MainHeroSection;

import styles from "./MainHeroSection.module.scss";
import HeroSectionTitle from "../Title/HeroSectionTitle.tsx";
import HeroSectionHero from "../Hero/HeroSectionHero.tsx";
import BtnCallback from "../BtnCallback/BtnCallback.tsx";
const MainHeroSection = () => {
  return (
    <div className={styles.mainHeroSection}>
      <HeroSectionHero />
      <HeroSectionTitle />
      <BtnCallback />
    </div>
  );
};

export default MainHeroSection;

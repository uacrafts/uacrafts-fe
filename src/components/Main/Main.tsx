import styles from "./Main.module.scss"
// import MainHeroSection from "../MainScreen/MainHeroSection/MainHeroSection.tsx";
import WaterMark from "../MainScreen/WaterMark/WaterMark.tsx";
import MainImagesSlider from "../MainScreen/MainImagesSlider/MainImagesSlider.tsx";
import Catalogue from "../Catalogue/Catalogue.tsx";
import HeroSectionHero from "../MainScreen/Hero/HeroSectionHero.tsx";
import HeroSectionTitle from "../MainScreen/Title/HeroSectionTitle.tsx";
import BtnScrollDown from "../buttons/BtnScrollDown/BtnScrollDown.tsx";

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.mainScreen}>
                <WaterMark/>
                <div className={styles.Title}>
                    <HeroSectionHero/>
                </div>
                <div className={styles.SubTitle}>
                    <HeroSectionTitle/>
                </div>
                <div className={styles.BtnArea}>
                    <BtnScrollDown/>
                </div>
                <div className={styles.SliderArea}>
                    <MainImagesSlider/>
                </div>
                <div className={styles.ImageArea}></div>
            </div>
            <Catalogue/>
        </div>
    );
};

export default Main;

// <div className="container">
//     <div className="Title"></div>
//     <div className="SubTitle"></div>
//     <div className="BtnArea"></div>
//     <div className="SliderArea"></div>
//     <div className="ImageArea"></div>
// </div>
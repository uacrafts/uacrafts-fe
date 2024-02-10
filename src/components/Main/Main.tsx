import styles from "./Main.module.scss"
import MainHeroSection from "../MainHeroSection/MainHeroSection.tsx";
import MainImagesSection from "../MainImagesSection/MainImagesSection.tsx";
const Main = () => {
    return (
        <div className={styles.main}>
            <MainHeroSection />
            <MainImagesSection />
        </div>
    );
};

export default Main;
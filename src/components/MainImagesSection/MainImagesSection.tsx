import styles from "./MainImagesSection.module.scss"
const MainImagesSection = () => {
    return (
        <div className={styles.mainImagesSection}>
            <div className={styles.yaryloImage}></div>
            <div className={styles.leafImage}></div>
            <div className={styles.stillLifeImage}></div>
        </div>
    );
};

export default MainImagesSection;
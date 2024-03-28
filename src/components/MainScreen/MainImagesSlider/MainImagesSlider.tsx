import styles from "./MainImagesSlider.module.scss"
const MainImagesSlider = () => {
    return (
        <div className={styles.mainImagesSlider}>
            <div className={styles.slider}>
                <div className={styles.leafsImage}></div>
                <div className={styles.tablewareImage}></div>
            </div>
        </div>
    );
};

export default MainImagesSlider;
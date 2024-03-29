import styles from "../BtnHeart/BtnHeart.module.scss";
// import heart from "../../../assets/heart.svg"
const BtnHeart = () => {
    return (
        <div className={styles.btnHeartContainer}>
            {/*<img src={heart} alt="Heart Icon" />*/}
            <div className={styles.heart}></div>
            <div className={styles.border}></div>
        </div>
    );
};

export default BtnHeart;
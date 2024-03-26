import styles from "../BtnArrows/BtnArrow.module.scss";

const BtnArrow = ({ arrow }: { arrow: string }) => {
    return (
        <div className={`${styles.btnArrow} ${arrow === 'left' ? styles.leftArrow : styles.rightArrow}`}>
        </div>
    );
};

export default BtnArrow;
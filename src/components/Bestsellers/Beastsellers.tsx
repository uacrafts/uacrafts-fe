import styles from "./Bestsellers.module.scss"
import SectionTitle from "../SectionTitle/SectionTitle.tsx";
import BtnRectangle from "../buttons/BtnRectangle/BtnRectangle.tsx";
import BtnArrow from "../buttons/BtnArrows/BtnArrow.tsx";

const Bestsellers = () => {
    return (
        <div className={styles.bestsellers}>
            <div className={styles.title}>
                <SectionTitle title="Бестселери" />
            </div>
            <div className={styles.nav}>
                <BtnRectangle title="Декор" />
                <BtnRectangle title="Посуд з дерева" />
                <BtnRectangle title="Прикраси" />
                <BtnRectangle title="Кераміка" />
                <BtnRectangle title="Вироби з вовни" />
                <BtnRectangle title="Меблі" />
                <BtnArrow arrow="left" />
                <BtnArrow arrow="right" />
            </div>
            <div className={styles.cardArea2}></div>
            <div className={styles.cardArea1}></div>
            <div className={styles.cardArea3}></div>
            <div className={styles.cardArea4}></div>
        </div>
    );
};

export default Bestsellers;
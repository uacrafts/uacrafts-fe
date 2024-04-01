import styles from "./Novelties.module.scss"
import SectionTitle from "../SectionTitle/SectionTitle.tsx";
import BtnRectangle from "../buttons/BtnRectangle/BtnRectangle.tsx";
import BtnArrow from "../buttons/BtnArrows/BtnArrow.tsx";
import CategoryCard from "../CategoryCard/CategoryCard.tsx";
import spiders from "../../assets/images/spiders.png"
import metro from "../../assets/images/metro.png"
import kyivChestnut from "../../assets/images/kyivChestnut.png"
import candlestick1 from "../../assets/images/candlestick1.png"

const Novelties = () => {
    return (
        <div className={styles.novelties}>
            <div className={styles.title}>
                <SectionTitle title="Новинки" />
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
            <div className={styles.cardArea2}>
                {/*category: string;*/}
                {/*srcImage: string;*/}
                {/*sellerName: string;*/}
                {/*price: number;*/}
                <CategoryCard category="Павуки" srcImage={spiders} sellerName="Pavluk Store" price={2000} />
            </div>
            <div className={styles.cardArea1}>
                <CategoryCard category='Свічка "Метро"' srcImage={metro} sellerName="Palaye svichka" price={3050} />
            </div>
            <div className={styles.cardArea3}>
                <CategoryCard category='Свічка "Київський каштан"' srcImage={kyivChestnut} sellerName="Palaye svichka" price={2000} />
            </div>
            <div className={styles.cardArea4}>
                <CategoryCard category="Свічники" srcImage={candlestick1} sellerName="Hutsulavtentyka" price={2050} />
            </div>
        </div>
    );
};

export default Novelties;
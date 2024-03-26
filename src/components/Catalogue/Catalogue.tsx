import styles from "./Catalogue.module.scss"
import BtnArrow from "../buttons/BtnArrows/BtnArrow.tsx";
import SectionTitle from "../SectionTitle/SectionTitle.tsx";
import CatalogueCard from "../CatalogueScreen/CatalogueCard/CatalogueCard.tsx";
import chestnut from "../../assets/images/Rectangle 8.png"
import tableware from "../../assets/images/Tableware.png"
import leafs from "../../assets/images/leafs.png"
import jewelry from "../../assets/images/jewelry.png"
import wool from "../../assets/images/wool.png"

const Catalogue = () => {
    return (
        <div className={styles.catalogue}>
                <div className={styles.Title}>
                    <SectionTitle title="Каталог" />
                </div>
                <div className={styles.Nav}>
                    <BtnArrow arrow="left" />
                    <BtnArrow arrow="right" />
                </div>
                <div className={styles.Item1}>
                    <CatalogueCard title="Декор" srcImage={chestnut} />
                </div>
                <div className={styles.Item2}>
                    <CatalogueCard title="Меблі" srcImage={tableware} />
                </div>
                <div className={styles.Item3}>
                    <CatalogueCard title="Прикраси" srcImage={jewelry} />
                </div>
                <div className={styles.Item4}>
                    <CatalogueCard title="Посуд з дерева" srcImage={leafs} />
                </div>
                <div className={styles.Item5}>
                    <CatalogueCard title="Вироби з вовни" srcImage={wool} />
                </div>
        </div>
    );
};

export default Catalogue;
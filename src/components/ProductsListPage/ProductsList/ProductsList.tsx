import styles from "./ProductsList.module.scss";
import Novelties from "../../Noveltys/Novelties.tsx";
import SectionTitle from "../../SectionTitle/SectionTitle.tsx";


const ProductsList = () => {
    return (
        <div className={styles.productsList}>
            <div className={styles.pathComponent}></div>

            <div className={styles.title}>
                <SectionTitle title="Кераміка" />
            </div>
            <div className={styles.list}>

            </div>
            <div className={styles.BtnArea}>

            </div>
            <Novelties />
        </div>
    );
};

export default ProductsList;
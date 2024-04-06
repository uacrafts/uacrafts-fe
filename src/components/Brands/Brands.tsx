import styles from "./Brands.module.scss"
import SectionTitle from "../SectionTitle/SectionTitle.tsx";
import brand6 from "../../assets/images/brand6.png"
import brand5 from "../../assets/images/brand5.png"
import brand4 from "../../assets/images/brand4.png"
import brand3 from "../../assets/images/brand3.png"
import brand2 from "../../assets/images/brand2.png"
import brand1 from "../../assets/images/brand1.png"

const Brands = () => {
    return (
        <div className={styles.brands}>
            <div className={styles.title}>
                <SectionTitle title="Бренди" />
            </div>
            <div className={styles.container}>
                <div className={styles.sliderBrands}>
                    <img src={brand1} alt="First brand"/>
                    <img src={brand2} alt="Second brand"/>
                    <img src={brand3} alt="Third brand"/>
                    <img src={brand4} alt="Fourth brand"/>
                    <img src={brand5} alt="Fifth brand"/>
                    <img src={brand6} alt="Sixth brand"/>
                </div>
            </div>

        </div>
    );
};

export default Brands;
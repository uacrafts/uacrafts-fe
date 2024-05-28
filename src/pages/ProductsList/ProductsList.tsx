// import React from "react";
import styles from "./ProductsList.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.tsx";
import {BreadcrumbItem, home} from "../ProductDetails/ProductDetails.tsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.tsx";
import Paginator from "../../components/Paginator/Paginator.tsx";
import CategoryCard from "../../components/CategoryCard/CategoryCard.tsx";
import spiders from "../../assets/images/spiders.png";
import metro from "../../assets/images/metro.png";
import kyivChestnut from "../../assets/images/kyivChestnut.png";
// import {Link} from "react-router-dom";

// Breadcrumbs for a products page
const productsList: BreadcrumbItem[] = [
    {path: "/", label: home},
    {path: "/subcategory", label: "Декор"},
    {path: "/subcategory/list", label: 'page 1'},
];

const ProductsList = () => {
    return (

        <div>
            <Breadcrumbs items={productsList}/>
            <div className={styles.wrapper}>
                <SectionTitle title="Кераміка"/>
                <div className={styles.mainContainer}>
                    <div className={styles.sectionFilters}>
                        {/*    Filters component  */}
                        <div><h3>Filters Area</h3></div>
                    </div>
                    <div className={styles.cardsContainer}>
                        <div className={styles.sortSelectContainer}>
                            <div><h3>Select Area</h3></div>
                        {/*    Sort-select element  */}
                        </div>
                        <div className={styles.cards}>
                                <CategoryCard category="Павуки" srcImage={spiders} sellerName="Pavluk Store"
                                              price={2000}/>
                                <CategoryCard category='Свічка "Метро"' srcImage={metro} sellerName="Palaye svichka"
                                              price={3050}/>
                                <CategoryCard category='Свічка "Київський каштан"' srcImage={kyivChestnut}
                                              sellerName="Palaye svichka" price={2000}/>
                            <CategoryCard category="Павуки" srcImage={spiders} sellerName="Pavluk Store"
                                          price={2000}/>
                            <CategoryCard category='Свічка "Метро"' srcImage={metro} sellerName="Palaye svichka"
                                          price={3050}/>
                            <CategoryCard category='Свічка "Київський каштан"' srcImage={kyivChestnut}
                                          sellerName="Palaye svichka" price={2000}/>
                            <CategoryCard category="Павуки" srcImage={spiders} sellerName="Pavluk Store"
                                          price={2000}/>
                            <CategoryCard category='Свічка "Метро"' srcImage={metro} sellerName="Palaye svichka"
                                          price={3050}/>
                            <CategoryCard category='Свічка "Київський каштан"' srcImage={kyivChestnut}
                                          sellerName="Palaye svichka" price={2000}/>
                        </div>
                    </div>
                </div>
            </div>
            <Paginator/>
        </div>
    )
};

export default ProductsList;


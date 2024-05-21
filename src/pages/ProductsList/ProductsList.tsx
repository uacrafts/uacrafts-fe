// import React from "react";
// import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.tsx";
import styles from "./ProductsList.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.tsx";
import {BreadcrumbItem, home} from "../ProductDetails/ProductDetails.tsx";
// import {Link} from "react-router-dom";

// Breadcrumbs for a products page
const productsList: BreadcrumbItem[] = [
    { path: "/", label: home },
    { path: "/subcategory", label: "Декор" },
    { path: "/subcategory/list", label: 'page 1' },
];

const ProductsList = () => {
    return (

        <div>
            <div className={styles.wrapper}>
                <Breadcrumbs items={productsList} />
            </div>
            {/*<Breadcrumbs items={productItems} />*/}
        </div>
    )
};

export default ProductsList;

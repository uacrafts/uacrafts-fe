import Novelties from "../../components/Noveltys/Novelties.tsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.tsx";
import { BreadcrumbItem, home } from "../ProductDetails/ProductDetails.tsx";
import styles from "./SubCategory.module.scss";
import { subcategories } from "../../constatnts/subcategories.ts";
import CatalogueCard from "../../components/CatalogueScreen/CatalogueCard/CatalogueCard.tsx";
import BtnRectangle from "../../components/buttons/BtnRectangle/BtnRectangle.tsx";

const subcategoryItems: BreadcrumbItem[] = [
  { path: "/", label: home },
  { path: "/subcategory", label: "Кераміка" },
];

const SubCategory = () => {
  return (
    <>
      <Breadcrumbs items={subcategoryItems} />
      <div className={styles.container}>
        <h1 className={styles.title}>Кераміка</h1>
        <div className={styles.subcategories}>
          {subcategories.map((item, index) => (
              <CatalogueCard
              title={item.title}
              key={index}
              srcImage={item.srcImage}
            />
          ))}
        </div>
        <div className={styles.actionArea}>
          <BtnRectangle title="Показати більше" />
        </div>
        <div className={styles.novelties}>
          <Novelties />
        </div>
      </div>
    </>
  );
};

export default SubCategory;

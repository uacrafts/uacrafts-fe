import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.tsx";
import React from "react";
import styles from "./ProductDetails.module.scss";
import candle from "../../../src/assets/images/kyivChestnutBig.png";
import leafs from "../../../src/assets/images/leaf.png";
import Tabs from "../../components/Tabs/Tabs.tsx";
import CarouselSlider from "../../components/CarouselSlider/CarouselSlider.tsx";
import BtnBuy from "../../components/buttons/BtnBuy/BtnBuy.tsx";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector.tsx";
import { feedbacks } from "../../constatnts/feddbackConstants.ts";
import spiders from "../../assets/images/spiders.png";
import CategoryCard from "../../components/CategoryCard/CategoryCard.tsx";
import BtnArrow from "../../components/buttons/BtnArrows/BtnArrow.tsx";
import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  path: string;
  label: string | React.JSX.Element;
}

const home = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.317 2.82394C12.563 2.16415 11.437 2.16415 10.683 2.82394L3.68299 8.94894C3.24896 9.32872 3 9.87737 3 10.4541V20.0003C3 21.1049 3.89543 22.0003 5 22.0003H19C20.1046 22.0003 21 21.1049 21 20.0003V10.4541C21 9.87737 20.751 9.32872 20.317 8.94895L13.317 2.82394ZM5 10.4541L12 4.3291L19 10.4541V20.0003H14V15.0002H10V20.0003H5V10.4541Z"
      fill="#364058"
    />
  </svg>
);

const arrow = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="#627C7A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const star = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5457 0.988282C6.72416 0.600063 7.27584 0.600061 7.4543 0.988281L9.13514 4.64478C9.20796 4.80319 9.35805 4.91224 9.53121 4.93254L13.5282 5.4012C13.9525 5.45095 14.123 5.97563 13.8089 6.26532L10.8508 8.99382C10.7226 9.11203 10.6653 9.28846 10.6995 9.45943L11.4889 13.4056C11.5727 13.8245 11.1264 14.1488 10.7538 13.9396L7.24479 11.9694C7.09276 11.8841 6.90724 11.8841 6.75521 11.9694L3.24615 13.9396C2.87359 14.1488 2.42727 13.8245 2.51108 13.4056L3.30048 9.45943C3.33468 9.28846 3.27736 9.11203 3.1492 8.99382L0.191074 6.26533C-0.122998 5.97563 0.0474793 5.45095 0.471845 5.4012L4.46879 4.93254C4.64195 4.91224 4.79204 4.80319 4.86486 4.64478L6.5457 0.988282Z"
      fill="#364058"
    />
  </svg>
);

const star_light = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5457 0.988282C7.72416 0.600063 8.27584 0.600061 8.4543 0.988281L10.1351 4.64478C10.208 4.80319 10.358 4.91224 10.5312 4.93254L14.5282 5.4012C14.9525 5.45095 15.123 5.97563 14.8089 6.26532L11.8508 8.99382C11.7226 9.11203 11.6653 9.28846 11.6995 9.45943L12.4889 13.4056C12.5727 13.8245 12.1264 14.1488 11.7538 13.9396L8.24479 11.9694C8.09276 11.8841 7.90724 11.8841 7.75521 11.9694L4.24615 13.9396C3.87359 14.1488 3.42727 13.8245 3.51108 13.4056L4.30048 9.45943C4.33468 9.28846 4.27736 9.11203 4.1492 8.99382L1.19107 6.26533C0.877002 5.97563 1.04748 5.45095 1.47185 5.4012L5.46879 4.93254C5.64195 4.91224 5.79204 4.80319 5.86486 4.64478L7.5457 0.988282Z"
      fill="#95B1AE"
    />
  </svg>
);

const price = 2500;

// Breadcrumbs for a product page
const productItems: BreadcrumbItem[] = [
  { path: "/", label: home },
  { path: "/category", label: "Декор" },
  { path: "/product:id=1", label: 'Свічка "Київський каштан"' },
];

const tabs = [
  { id: 1, label: "Товар", sectionId: "product" },
  { id: 2, label: "Опис", sectionId: "description" },
  { id: 3, label: "Характеристики", sectionId: "characteristics" },
  { id: 4, label: "Про виробника", sectionId: "aboutMaker" },
  { id: 5, label: "Відгуки", sectionId: "reviews" },
];

const rate = [star, star, star, star, star];
const rate_individual = [
  star_light,
  star_light,
  star_light,
  star_light,
  star_light,
];

const photos = [candle, leafs, candle, candle, candle, candle, candle];

const ProductDetails = () => {
  return (
    <div>
      <Breadcrumbs items={productItems} />
      <Tabs tabs={tabs} />
      <section className={styles.wrapper}>
        <section id="product" className={styles.product}>
          <div className={styles.carousel}>
            <CarouselSlider photos={photos} />
          </div>
          <div className={styles.price_and_delivery}>
            <div className={styles.product_name}>
              <div className={styles.product_name_top}>
                <h3>Свічка "Київський каштан"</h3>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.like}
                >
                  <path
                    d="M15.7663 2.7377C15.3753 2.34531 14.9111 2.03404 14.4002 1.82168C13.8893 1.60931 13.3417 1.5 12.7887 1.5C12.2357 1.5 11.6881 1.60931 11.1772 1.82168C10.6663 2.03404 10.2021 2.34531 9.81116 2.7377L8.9998 3.55166L8.18843 2.7377C7.39874 1.94548 6.32768 1.50041 5.21089 1.50041C4.09409 1.50041 3.02303 1.94548 2.23334 2.7377C1.44365 3.52993 1 4.60441 1 5.72479C1 6.84516 1.44365 7.91965 2.23334 8.71187L3.0447 9.52583L8.9998 15.5L14.9549 9.52583L15.7663 8.71187C16.1574 8.31967 16.4677 7.854 16.6794 7.34146C16.891 6.82893 17 6.27957 17 5.72479C17 5.17 16.891 4.62064 16.6794 4.10811C16.4677 3.59557 16.1574 3.1299 15.7663 2.7377Z"
                    stroke="#364058"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>Palaye svichka</p>
            </div>
            <div className={styles.rate_and_number}>
              <div className={styles.rate}>
                {rate.map((item) => item)}{" "}
                <p>
                  Відгуки: <span>(1)</span>
                </p>
              </div>
              <div className={styles.number}>
                <p>
                  Артикул: <span>DE003</span>
                </p>
              </div>
            </div>
            <div className={styles.price_quantity_buy}>
              <div className={styles.price}>{price} грн</div>
              <div className={styles.quantity_and_buy}>
                <QuantitySelector />
                <BtnBuy title={"Купити"} />
              </div>
            </div>
            <div className={styles.pay_and_delivery}>
              <div className={styles.rectangle_wrapper}>
                <Link to="#" className={styles.top_link}>
                  <h3>Оплата</h3>
                  <div className={styles.arrow}>{arrow}</div>
                </Link>
                <p>Kарткою на сайті, під час отримання, оплата частинами </p>
              </div>
              <div className={styles.rectangle_wrapper}>
                <Link to="#" className={styles.top_link}>
                  <h3 className={styles.delivery}>Доставка</h3>
                  <div className={styles.arrow}>{arrow}</div>
                </Link>
                <p>Доставка на відділення поштових операторів: </p>
                <div className={styles.post}>
                  <p className={styles.nova}>Нова Пошта</p>
                  <p className={styles.meest}>Meest Express</p>
                  <p className={styles.ukrpost}>Укрпошта</p>
                </div>
              </div>
              <div className={styles.rectangle_wrapper}>
                <Link to="#" className={styles.top_link}>
                  <h3 className={styles.warranty}>Гарантія</h3>
                  <div className={styles.arrow}>{arrow}</div>
                </Link>
                <p>Обмін/повернення товару впродовж 14 днів</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.details}>
          <div className={styles.details_data}>
            <div id="description" className={styles.description}>
              <h3 className={styles.description_title}>Опис</h3>
              <p>
                Свічка у формі листа київського каштану. Зроблена з натурального
                соєвого воску. Хендмейд кераміка, соєвий віск, аромати: свіжа
                дощова вода і ніжний цвіт каннабісу / свіжоскошена трава і
                хмільне пиво
              </p>
            </div>
            <div id="characteristics" className={styles.characteristics}>
              <h3 className={styles.description_title}>Характеристики</h3>
              <div className={styles.char_items}>
                <p>Матеріал</p>
                <span className={styles.underline}></span>
                <p>Віск</p>
              </div>
              <div className={styles.char_items}>
                <p>Колір</p>
                <span className={styles.underline}></span>
                <p className={styles.white}>Білий</p>
                <p className={styles.green}>Зелений</p>
              </div>
            </div>
            <div id="aboutMaker" className={styles.description}>
              <h3 className={styles.description_title}>Про виробника</h3>
              <p>
                Свічка у формі листа київського каштану. Зроблена з натурального
                соєвого воску. Хендмейд кераміка, соєвий віск, аромати: свіжа
                дощова вода і ніжний цвіт каннабісу / свіжоскошена трава і
                хмільне пиво
              </p>
            </div>
            <div id="reviews" className={styles.feedbacks}>
              <h3 className={styles.description_title}>Відгуки</h3>
              {feedbacks.map((feedback, index) => (
                <div key={index} className={styles.feedback}>
                  <p className={styles.name}>
                    {feedback.name}
                    <span className={styles.date}>{feedback.date}</span>
                  </p>
                  <div className={styles.rate}>
                    {rate_individual.map((item) => item)}
                  </div>
                  <p className={styles.comment}>{feedback.comment}</p>
                </div>
              ))}
            </div>
            <a href="#" className={styles.show_more}>
              Показати більше
            </a>
          </div>
          <div className={styles.divider}></div>
        </section>
        <div className={styles.similar_products}>
          <div className={styles.similar_products_top}>
            <h3>Схожі товари</h3>
            <div className={styles.nav}>
              <BtnArrow arrow="left" />
              <BtnArrow arrow="right" />
            </div>
          </div>
          <div className={styles.similar_products_cards}>
            <CategoryCard
              category="Павуки"
              srcImage={spiders}
              sellerName="Pavluk Store"
              price={2000}
            />
            <CategoryCard
              category="Павуки"
              srcImage={spiders}
              sellerName="Pavluk Store"
              price={2000}
            />
            <CategoryCard
              category="Павуки"
              srcImage={spiders}
              sellerName="Pavluk Store"
              price={2000}
            />
            <CategoryCard
              category="Павуки"
              srcImage={spiders}
              sellerName="Pavluk Store"
              price={2000}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;

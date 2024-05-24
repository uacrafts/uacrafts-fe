import React from 'react';
import styles from '../Cart/CartPoup.module.scss';
import {CartPopupProps} from "../../types";
import {buttonLeftArrow, buttonMinus, buttonPlus, deletButton} from "../../assets/svgConst/svgConst.tsx";
import CategoryCard from "../CategoryCard/CategoryCard.tsx";
import spiders from "../../assets/images/spiders.png";

const CartPopup: React.FC<CartPopupProps> = ({
                                               items,
                                               onClose,
                                               onItemCountChange,
                                               onItemRemove,
                                               onContinueShopping,
                                               onProceedToCheckout,
                                             }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className={styles.overlay}>
      <div className={styles.cartPopup}>
        <div className={styles.header}>
          <h2>Кошик</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5 6L6.5 18" stroke="#444861" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round"/>
              <path d="M6.5 6L18.5 18" stroke="#444861" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className={styles.itemsList}>
          {items.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.itemLeftPart}>
                <img src={item.image} alt={item.name} className={styles.image}/>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.art}>Артикул: <span className={styles.id}>{item.id}</span></p>
              </div>
              <div className={styles.itemRightPart}>
                <button className={styles.button}
                        onClick={() => onItemCountChange(item.id, item.count - 1)}>{buttonMinus}</button>
                <input
                  type="number"
                  inputMode="text"
                  className={styles.countInput}
                  value={item.count}
                  onChange={(e) => onItemCountChange(item.id, parseInt(e.target.value, 10))}
                />
                <button className={styles.button}
                        onClick={() => onItemCountChange(item.id, item.count + 1)}>{buttonPlus}</button>
                <span className={styles.price}>{(item.price * item.count).toFixed(0)} грн</span>
                <button className={styles.deleteButton} onClick={() => onItemRemove(item.id)}>{deletButton}</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.navigate}>
          <div className={styles.back}>
            <button className={styles.backButton} onClick={onContinueShopping}>{buttonLeftArrow}Продовжити покупки
            </button>
          </div>
          <div className={styles.proceed}>
            <div className={styles.total}>Разом: <span>{total.toFixed(2)} грн</span></div>
            <button className={styles.proceedButton} onClick={onProceedToCheckout}>Оформити замовлення</button>
          </div>
        </div>
        <div className={styles.similar_products}>
          <div className={styles.similar_products_top}>
            <h3>З цим товаром купують</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;

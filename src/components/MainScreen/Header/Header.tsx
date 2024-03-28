import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <a href="/">
          <img
            src="/src/assets/images/Logo.svg"
            alt="Logo"
            width="122"
            height="23"
          />
        </a>
      </div>
      <ul className={styles.header_links}>
        <li>
          <a href="#catalog">Каталог</a>
        </li>
        <li>
          <a href="/public">Новинки</a>
        </li>
        <li>
          <a href="/public">Доставка та оплата</a>
        </li>
        <li>
          <a href="/public">Контакти</a>
        </li>
      </ul>
      <div className={styles.search}>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
        >
          <path
            d="M9.91014 15.8667C13.7393 15.8667 16.8435 12.7625 16.8435 8.93333C16.8435 5.10416 13.7393 2 9.91014 2C6.08096 2 2.97681 5.10416 2.97681 8.93333C2.97681 12.7625 6.08096 15.8667 9.91014 15.8667Z"
            stroke="#364058"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.9766 17.9996L14.71 13.7329"
            stroke="#364058"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input id="search" type="text" className={styles.input} />
        <img
          src="/src/assets/images/FavHeart.svg"
          alt="Fav"
          width={20}
          height={20}
        />
        <img
          src="/src/assets/images/CartIcon.svg"
          alt="Cart"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Header;

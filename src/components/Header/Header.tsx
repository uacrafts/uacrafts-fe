import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div>Logo</div>
      <ul className={styles.header_links}>
        <li>
          <a href="/">Категорії</a>
        </li>
        <li>
          <a href="/">Лідери продажу</a>
        </li>
        <li>
          <a href="/">Кабінет</a>
        </li>
        <li>
          <a href="/">Про магазин</a>
        </li>
        <li>
          <a href="/">Контакти</a>
        </li>
      </ul>
      <div className={styles.search}>
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
        >
          <path
            d="M9.5 16.5C13.0899 16.5 16 13.5899 16 10C16 6.41015 13.0899 3.5 9.5 3.5C5.91015 3.5 3 6.41015 3 10C3 13.5899 5.91015 16.5 9.5 16.5Z"
            stroke="#1A1A1A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 18.5L14 14.5"
            stroke="#1A1A1A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          id="search"
          type="text"
          className={styles.input}
          placeholder="Я шукаю"
        />
        <button className={styles.search_button}>Пошук</button>
      </div>
    </div>
  );
};

export default Header;

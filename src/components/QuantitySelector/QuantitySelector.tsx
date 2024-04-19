import styles from "./QuantitySelector.module.scss";
import { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);
  const decrement = () => {
    if (quantity <= 1) return;
    setQuantity((prevState) => prevState - 1);
  };
  const increment = () => {
    if (quantity >= 9) return;
    setQuantity((prevState) => prevState + 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1 && value <= 9) {
      setQuantity(value);
    }
  };
  return (
    <button className={styles.quantity_selector}>
      <svg
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.minus}
        onClick={decrement}
      >
        <path
          d="M3.125 12H16.875"
          stroke="#9C9FA8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        type="text"
        onChange={handleChange}
        value={quantity}
        className={styles.quantity}
      />
      <svg
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.plus}
        onClick={increment}
      >
        <path
          d="M3.125 12H16.875"
          stroke="#627C7A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 3.75V20.25"
          stroke="#627C7A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default QuantitySelector;

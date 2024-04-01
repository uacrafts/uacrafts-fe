import styles from "./FeedbackCard.module.scss";
import { Feedback } from "../../types";
import { FC } from "react";

const FeedbackCard: FC<Feedback> = ({ avatar, name, nickname, comment }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardTop}>
        <div className={styles.avatar}>
          <img src={`./src/assets/images/${avatar}`} alt="avatar" />
        </div>
        <div className={styles.name}>
          <p>{name}</p>
          <p className={styles.nickname}>{nickname}</p>
        </div>
      </div>
      <div className={styles.cardMessage}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 22 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.quote}
        >
          <path
            d="M13.112 14.5723C12.7758 14.5723 12.4876 14.4523 12.2474 14.2121C12.0552 13.9719 11.9591 13.6837 11.9591 13.3474C11.9591 12.9631 12.0312 12.5788 12.1753 12.1945L15.9943 2.32286C16.2345 1.84249 16.4746 1.45819 16.7148 1.16997C17.0031 0.833704 17.4594 0.665574 18.0839 0.665574H20.4617C20.846 0.665574 21.1343 0.809685 21.3264 1.09791C21.5666 1.38613 21.6386 1.77043 21.5426 2.2508L19.9573 12.4827C19.9093 13.0592 19.7172 13.5636 19.3809 13.9959C19.0446 14.3802 18.5402 14.5723 17.8677 14.5723H13.112ZM1.58311 14.5723C1.24685 14.5723 0.958626 14.4523 0.71844 14.2121C0.526292 13.9719 0.430217 13.6837 0.430217 13.3474C0.430217 12.9631 0.502273 12.5788 0.646384 12.1945L4.46534 2.32286C4.70553 1.84249 4.96973 1.45819 5.25796 1.16997C5.54618 0.833704 5.97851 0.665574 6.55496 0.665574H8.9328C9.3171 0.665574 9.60532 0.809685 9.79747 1.09791C10.0377 1.38613 10.1097 1.77043 10.0136 2.2508L8.42841 12.4827C8.38037 13.0592 8.18823 13.5636 7.85197 13.9959C7.5157 14.3802 7.03533 14.5723 6.41085 14.5723H1.58311Z"
            fill="#343D55"
          />
        </svg>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;

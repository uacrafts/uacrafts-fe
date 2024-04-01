import FeedbackCard from "../FeedbackCard/FeedbackCard.tsx";
import styles from "./Feedback.module.scss";
import { feedbacks } from "../../constatnts/feddbackConstants.ts";
const Feedback = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Відгуки</h3>
      <div className={styles.cardWrapper}>
        {feedbacks.map((feedback, index) => (
          <FeedbackCard key={index} {...feedback} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;

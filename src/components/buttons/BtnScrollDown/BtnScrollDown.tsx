import styles from "./BtnScrollDown.module.scss"
import Button from '../../../assets/images/Button.svg'
const BtnScrollDown = () => {
    return (
        <div className={styles.btnScrollDown}>
            <img src={Button} alt={"Button scroll down"} />
        </div>
    );
};

export default BtnScrollDown;
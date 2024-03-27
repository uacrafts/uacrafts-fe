import styles from "./BtnScrollDown.module.scss"
import Button from '../../../assets/images/Button.svg'
const BtnScrollDown = () => {
    // const catalog
    return (
        <div className={styles.btnScrollDown}>
            <a href={'#catalog'}><img src={Button} alt={"Button scroll down"} /></a>
        </div>
    );
};

export default BtnScrollDown;
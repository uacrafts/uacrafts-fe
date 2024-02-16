// YourMainComponent.tsx
import React from "react";
import PopupModal from "../../../lib/Modal/Modal.tsx";
import styles from "./CallbackSubmittedModal.module.scss";
import SuccessMark from "../../../assets/Successmark.png";
import { CallbackSubmittedModalProps } from "../../../types";

const CallbackSubmittedModal: React.FC<CallbackSubmittedModalProps> = ({
  isPopupSuccessOpen,
  setIsPopupSuccessOpen,
}) => {
  const closePopup = () => {
    setIsPopupSuccessOpen(false);
  };

  return (
    <div className={styles.container}>
      <PopupModal isOpen={isPopupSuccessOpen} onClose={closePopup}>
        <div className={styles.popupContent}>
          <img src={SuccessMark} alt="success mark" onClick={closePopup} />
          <h2>Дякуємо за відповідь!</h2>
        </div>
      </PopupModal>
    </div>
  );
};

export default CallbackSubmittedModal;

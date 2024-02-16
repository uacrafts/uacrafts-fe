import styles from "./BtnCallback.module.scss";
import CallbackModal from "../Modals/CallbackModal/CallbackModal.tsx";
import React, { useState } from "react";
const BtnCallback: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <div className={styles.btnCallback} onClick={openPopup}>
        Подзвоніть мені &#8594;
      </div>
      <CallbackModal
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
    </>
  );
};

export default BtnCallback;

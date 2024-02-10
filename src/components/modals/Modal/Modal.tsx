import React from "react";
import Modal from "react-modal";

import styles from "./Modal.module.scss";

Modal.setAppElement("#root");

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const PopupModal: React.FC<PopupModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Popup Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <svg
        className={styles.closeButton}
        onClick={onClose}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="#1E88E5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="#1E88E5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </Modal>
  );
};

export default PopupModal;

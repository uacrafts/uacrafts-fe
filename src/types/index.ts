import { Dispatch, ReactNode, SetStateAction } from "react";

export type FormData = {
  username: string;
  phone: string;
};

export type CallbackModalProps = {
  isPopupOpen: boolean;
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
};

export type CreateCallbackResult = {
  createCallback: {
    status: boolean;
    callback: {
      id: number;
      name: string;
      phone: string;
    };
  };
};

export type PopupModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export type CallbackSubmittedModalProps = {
  isPopupSuccessOpen: boolean;
  setIsPopupSuccessOpen: Dispatch<SetStateAction<boolean>>;
};

export type Feedback = {
  date?: string;
  avatar: string;
  name: string;
  nickname: string;
  comment: string;
};

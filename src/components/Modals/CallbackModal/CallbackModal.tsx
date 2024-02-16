import React, { useState } from "react";
import PopupModal from "../../../lib/Modal/Modal.tsx";
import styles from "./CallbackModal.module.scss";
import CallbackSubmittedModal from "../CallbackSubmittedModal/CallbackSubmittedModal.tsx";
import { useMutation } from "@apollo/client";
import { CREATE_CALLBACK } from "../../../lib/apollo/createCallback.ts";
import { FormData } from "../../../types";
import { CallbackModalProps } from "../../../types";
import { CreateCallbackResult } from "../../../types";

const CallbackModal: React.FC<CallbackModalProps> = ({
  isPopupOpen,
  setIsPopupOpen,
}) => {
  const [isPopupSuccessOpen, setIsPopupSuccessOpen] = useState(false);
  const [createCallback, { error }] =
    useMutation<CreateCallbackResult>(CREATE_CALLBACK);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const [formData, setFormData] = useState<FormData>({
    username: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [mutationError, setMutationError] = useState<string | null>(null);
  const [isFormDirty, setIsFormDirty] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Set isFormDirty to true when any input is changed
    setIsFormDirty(true);

    // Remove error message when start typing again
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (formData.username.length > 20) {
      newErrors.username = "Ім'я не має бути довшим за 20 символів";
    }

    // Ukrainian phone number validation
    const phoneRegex = /^\+380\d{9}$/; // Assumes a Ukrainian number starting with +380
    if (!formData.phone.match(phoneRegex)) {
      newErrors.phone = "Невірно набраний номер телефону";
    }

    // Set errors and prevent form submission if there are errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else if (error) {
      console.log("Error");
    } else {
      // Continue with form submission logic
      createCallback({
        variables: {
          input: {
            name: formData.username,
            phone: formData.phone,
          },
        },
      })
        .then((mutationResult) => {
          console.log(
            "Submitted data: ",
            mutationResult.data?.createCallback.status,
          );
          setIsPopupOpen(false);
          setIsPopupSuccessOpen(true);
        })
        .catch((mutationError) => {
          console.error("Mutation error:", mutationError);
          setMutationError("Помилка при відправці форми. Спробуйте ще раз."); // Set error message
        });
    }
  };

  return (
    <>
      <div className={styles.container}>
        <PopupModal isOpen={isPopupOpen} onClose={closePopup}>
          <div className={styles.popupContent}>
            {mutationError && (
              <div className={styles.error_message}>{mutationError}</div>
            )}
            <h2>Залишити номер телефону</h2>
            <p>Ми вам зателефонуємо найближчим часом</p>
            <form onSubmit={handleSubmit}>
              <div className={styles.user_name}>
                <label htmlFor="user_name">Імʼя </label>
                <input
                  id="user_name"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`${styles.input_normal} ${errors.username && styles.input_error}`}
                  placeholder="Введіть імʼя"
                />
                {isFormDirty && errors.username && (
                  <span className={styles.error_message}>
                    {errors.username}
                  </span>
                )}
              </div>
              <div className={styles.user_phone}>
                <label htmlFor="user_phone">Номер телефону </label>
                <input
                  id="user_phone"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${styles.input_normal} ${errors.phone && styles.input_error}`}
                  placeholder="( _ _ _ )  _ _ _  _ _  _ _"
                />
                {isFormDirty && errors.phone && (
                  <span className={styles.error_message}>{errors.phone}</span>
                )}
              </div>
              <button
                className={styles.submit_button}
                type="submit"
                disabled={!isFormDirty} // Disable button until the form is dirty
              >
                Відправити
              </button>
            </form>
            <div className={styles.privacy_policies}>
              <p>Реєструючись ви приймаєте умови</p>
              <a>Політики конфеденційності</a>
            </div>
          </div>
        </PopupModal>
      </div>
      <CallbackSubmittedModal
        isPopupSuccessOpen={isPopupSuccessOpen}
        setIsPopupSuccessOpen={setIsPopupSuccessOpen}
      />
    </>
  );
};

export default CallbackModal;

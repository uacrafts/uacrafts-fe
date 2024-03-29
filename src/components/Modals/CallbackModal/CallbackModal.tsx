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

    const nameRegex = /^[a-zA-Z0-9\u0400-\u04FF]*$/;
    if (!formData.username.match(nameRegex)) {
      newErrors.username = "Ім'я не може включати спеціальні символи";
    }

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
          setMutationError(null);
          setIsPopupOpen(false);
          setIsPopupSuccessOpen(true);
          // Reset the form after successful submission
          setFormData({ username: "", phone: "" });
        })
        .catch((mutationError) => {
          console.error("Mutation error:", mutationError);
          console.log(error);
          setMutationError("Помилка при відправці форми. Спробуйте ще раз."); // Set error message
        });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newErrors: Record<string, string> = {};

    switch (name) {
      case "username":
        const nameRegex = /^[a-zA-Z0-9\u0400-\u04FF]*$/;
        if (!value.match(nameRegex)) {
          newErrors.username = "Ім'я не може включати спеціальні символи";
        }
        if (value.length > 20) {
          newErrors.username = "Ім'я не має бути довшим за 20 символів";
        }
        break;
      case "phone":
        const phoneRegex = /^\+380\d{9}$/; // Assumes a Ukrainian number starting with +380
        if (!value.match(phoneRegex)) {
          newErrors.phone = "Невірно набраний номер телефону";
        }
        break;
      default:
        break;
    }

    // Update errors state based on validation results
    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
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
                  onBlur={handleBlur}
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
                  onBlur={handleBlur}
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
                disabled={
                  Object.values(errors).some((error) => error !== "") ||
                  formData.phone.trim() === ""
                } // Disable button until the form is dirty
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

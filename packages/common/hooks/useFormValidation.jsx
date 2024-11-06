import { useState } from "react";
import { dates } from "../utils";
import { useTranslation } from "react-i18next";

const useFormValidation = (initialState, validate, isWeb = false) => {
  const { t } = useTranslation();

  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (eventOrValue, name = null) => {
    let newValue;
    let fieldName;

    // Determinar el origen del cambio (web o móvil)
    if (isWeb && eventOrValue?.target) {
      const { target } = eventOrValue;
      fieldName = target.name;
      newValue =
        target.type === "checkbox" ? (target.checked ? 1 : 0) : target.value;
    } else {
      fieldName = name;
      newValue = eventOrValue;
    }

    // Validaciones comunes
    if (fieldName === "height" || fieldName === "weight") {
      newValue = newValue.replace(/\D/g, ""); // Solo números
      newValue = newValue === "" ? null : isWeb ? newValue : Number(newValue); // Número en móvil
    }

    // Actualizar el estado del formulario
    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: newValue === "" ? null : newValue,
    }));
  };

  const handleChangeBirthdate = (date) => {
    setFormState((prevState) => ({
      ...prevState,
      birthdate: dates.normalizeDate(date),
    }));
  };

  const handleValidation = () => {
    const validationErrors = validate(formState, t);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return {
    formState,
    setFormState,
    errors,
    handleChange,
    handleChangeBirthdate,
    handleValidation,
  };
};

export default useFormValidation;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "./Input";
import { Logo } from "./Logo";
import {
  validateEmail,
  validatePassword,
  valideEmailMessage,
  validatePasswordMessage,
} from "../shared/validators";
import { useLogin } from "../shared/hooks";

export const Login = ({ switchAuthHandler }) => {
  const { login, isLoading } = useLogin();

  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    login(formState.email.value, formState.password.value);
  };

  const isSubmitButtonDisabled =
    isLoading || !formState.password.isValid || !formState.email.isValid;

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };
  return (
    <div className="login-container">
      <Logo text={"Inicio de sesión"} />
      <form className="auth-form">
        <Input
          field="email"
          label="Email"
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={valideEmailMessage}
        />
        <Input
          field="password"
          label="Password"
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type="password"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.password.showError}
          validationMessage={validatePasswordMessage}
        />
        <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
          Iniciar sesión
        </button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        ¿Aún no tienes una cuenta?... ¡Regístrate acá!
      </span>
    </div>
  );
};

Login.propTypes = {
  switchAuthHandler: PropTypes.func.isRequired,
};

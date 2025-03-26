import React, {useState} from "react";
import PropTypes from "prop-types"
import { Input } from "./Input";
import { Logo } from "./Logo";
import { 
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
  validateUsername,
  validateEmailMessage,
  validatePasswordMessage,
  validatePasswordConfirmMessage,
  validateUsernameMessage
} from "../shared/validators";

export const Register = ({switchAuthHandler}) => {
  const [formState, setFormState] = useState({
    email:{
      value:"",
      isValid: false,
      showError: false
    },
    password:{
      value:"",
      isValid: false,
      showError: false
    },
    passwordConf:{
      value:"",
      isValid: false,
      showError: false
    },
    username:{
      value:"",
      isValid: false,
      showError: false
    }
  })

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) =>({
      ...prevState,
      [field]:{
        ...prevState[field],
        value
      }
    }))
  }

  const handelerRegister = (event) =>{
    event.preventDefault()

    register(formState.email.value, formState.password.value, formState.username.value,)
  }

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false
    switch(field){
      case "email":
        isValid = validateEmail(value)
        break
      case "password":
        isValid = validatePassword(value)
        break
      case "passwordConfirm":
        isValid = validatePasswordConfirm(formState.password.value, value)
        break
      case "username":
        isValid = validateUsername(value)
        break
      default :
        break
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]:{
        ...prevState[field],
        isValid,
        showError: !isValid
      }
    }))
  }

  const isSubmitDisabled = isLoading
  return (
    <div className="register-container">
      <Logo text={"Formulario de Registro"}/>
      <form className="auth-form">
        <Input
          field="email"
          label="Email"
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={validateEmailMessage}
        />
        <Input
          field="username"
          label="Username"
          value={formState.username.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.username.showError}
          validationMessage={validateUsernameMessage}
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
        <Input
          field="passwordConfirm"
          label="Password Confirmation"
          value={formState.passwordConf.value}
          onChangeHandler={handleInputValueChange}
          type="password"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.passwordConf.showError}
          validationMessage={validatePasswordConfirmMessage}
        />
        <button>
          Crear Cuenta
        </button>
      </form>
        <span onClick={switchAuthHandler} className="auth-form-switch-label">
        ¿Ya tienes una cuenta?... ¡Inicia sesión acá!
        </span>
    </div>
  );
};

Register.propTypes ={
  switchAuthHandler: PropTypes.func.isRequired
}




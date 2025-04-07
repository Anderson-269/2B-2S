export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/

    return regex.test(email)
}

export const valideEmailMessage = 'Por favor ingresa una email válido'


import React from 'react'
import PropTypes from 'prop-types'
const logo = "https://i.ibb.co/9h0ZZfj/Escudo-Transparente.png"

export const Logo = ({text}) => {
    const logo = "https://i.ibb.co/9h0ZZfj/Escudo-Transparente.png"
    return (
        <div className='auth-from-logo-container'>
            <img
            src={logo}
            alt="Escudo de Fundacion Kinal"
            style={{
                width: '40px',
                height: '40px'
            }}
            />
            <span>&nbsp;&nbsp;&nbsp;{text}</span>
        </div>
    )
}

Logo.propTypes = {
    text: PropTypes.string.isRequired
}
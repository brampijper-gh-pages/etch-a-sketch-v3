import React from 'react';
import * as styles from './css/button.module.css'

const Button = ({ text }) => {
    return (
        <button>
            {text}
        </button>
    )
}

export default Button;
import React from 'react';
import './button.sass';

const Button = ({ content, action, disabled, arrow }) => {

    return (
        <button className={ arrow ? 'button button--arrow' : 'button' } 
            onClick={ action } 
            disabled={ disabled }>
            { content }
        </button>
    )
};

export default Button;
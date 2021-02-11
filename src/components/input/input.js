import React, { useState } from 'react';
import Validate from '../validate/validate.js';
import './input.sass';

const Input = ({ label, action, id, placeholder }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    let labelClass = 'input-block__label';

    return (
        <div className="input-block">
            <input className="input-block__input" 
                   id={ id } 
                   placeholder={ focused ? placeholder : '' } 
                   onChange={ action }
                   maxLength="2"
                   onInput={e => {
                       Validate(e.target, 99);
                       setValue(e.target.value)
                   }} />
            <label className={ labelClass }
                   htmlFor={ id } >
                { label }
            </label>
        </div>
    )
};

export default Input;
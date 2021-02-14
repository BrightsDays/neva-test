import React, { useState } from 'react';
import Validate from '../helpers/validate.js';
import './input.sass';

const Input = ({ label, action, id, placeholder, disabled, value }) => {

    return (
        <div className="input-block">
            <input className="input-block__input" 
                   id={ id } 
                   onChange={ action }
                   placeholder={ placeholder }
                   disabled={ disabled }
                   maxLength="2"
                   autoComplete="off"
                   value={ value }
                   onInput={e => {
                       Validate(e.target, 99);
                   }} />
            <label className="input-block__label"
                   htmlFor={ id } >
                { label }
            </label>
        </div>
    )
};

export default Input;
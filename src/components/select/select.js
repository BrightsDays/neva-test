import React, { useState } from 'react';
import './select.sass';

const Select = ({ label, action, id, disabled, options }) => {

    const listOptions = options.map((index) =>
        <option value={index} key={index}>{index}</option>
    );

    return (
        <div className="select-block">
            <label className='select-block__label'
                   htmlFor={ id } >
                { label }
            </label>
            <select className="select-block__select" 
                   id={ id }
                   onChange={ action }
                   disabled={ disabled }>
                {listOptions}
            </select>
        </div>
    )
};

export default Select;
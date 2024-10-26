import React from 'react';

export const InputField = (props) => {
    return (
        <div className='input-field'>
            <lable className="input-lable" htmlFor={props.name}>{props.string}</lable>
            <input className="input-field" type={props.type} name={props.name} required={props.required ? true : undefined} onChange={props.action} />
        </div>
    );
}


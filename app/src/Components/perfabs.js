import React, { useState } from 'react';
import DatePicker from "react-date-picker";


export const InputField = (props) => {
    return (
        <div className='input-field'>
            <lable className={"input-lable " + props.addClass} htmlFor={props.name}>{props.string}</lable>
            <input className={"input-field " + props.addClass} type={props.type} name={props.name} required={props.required ? true : undefined} onChange={props.action} placeholder={props.placeholder} />
        </div>
    );
}

export const InputDateField = (props) => {

    const [startDate, setStartDate] = useState(new Date());

    return <div className='date-input-wrapper'>
        <lable className={"input-lable " + props.addClass} htmlFor={props.name}>{props.string}</lable>
        <DatePicker />
    </div>
}

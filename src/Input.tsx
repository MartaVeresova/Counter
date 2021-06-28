import s from './App.module.css';
import React, {ChangeEvent} from 'react';

export type InputType = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    text: string
    minValue: number
    maxValue: number
    greeting: boolean
}

export const Input = React.memo(({value, onChange, text, minValue, maxValue, greeting}: InputType) => {

    const classNameInput =
        value < 0
        || minValue >= maxValue
        || maxValue === 0


    return (
        <div className={s.spanAndInput}>
            <span className={s.span}>{text}</span>
            <input
                className={classNameInput && !greeting ? s.errorInput : s.input}
                type="number"
                value={value}
                onChange={onChange}
            />
        </div>
    )
})
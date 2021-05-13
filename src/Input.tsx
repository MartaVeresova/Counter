import s from './App.module.css';
import React, {ChangeEvent} from 'react';

export type InputType = {
    error: boolean
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    text: string
}

export function Input(props: InputType) {

    return (
        <div className={s.spanAndInput}>
            <span className={s.editMode}>{props.text}</span>
            <input
                className={props.error ? `${s.input} ${s.errorInput}` : s.input}
                type="number"
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}
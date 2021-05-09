import React from 'react';
import s from './App.module.css';

export type CounterType = {
    inc: () => void
    reset: () => void
    number: number
}

export function Counter(props: CounterType) {

    return (
        <div className={s.container}>
            <span className={props.number === 5 ? `${s.number} ${s.maxNumber}` : `${s.number}`}>
                {props.number}
            </span>
            <div className={s.buttons}>
                    <button className={s.button} onClick={props.inc} disabled={props.number === 5}>inc</button>
                    <button className={s.button} onClick={props.reset} disabled={!props.number}>reset</button>
            </div>
        </div>
    )
}
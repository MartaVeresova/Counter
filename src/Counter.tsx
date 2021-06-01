import React from 'react';
import s from './App.module.css';
import {Button} from './Button';

export type CounterType = {
    inc: () => void
    reset: () => void
    number: number
    maxValue: number
    startValue: number
    error: boolean
    editMode: boolean
    start: boolean
}

export function Counter(props: CounterType) {

    const startValue = props.start
    const enterValue = props.editMode && !props.error
    const errorValue = props.error || props.maxValue <= props.startValue
    const numValue = !props.editMode && !props.error

    const numValueClassName =
        props.number === props.maxValue ? `${s.maxNumber}` : `${s.number}`

    const disabledInc =
        props.number === props.maxValue
        || props.editMode
        || props.error

    const disabledReset =
        !props.number
        || props.error


    return (
        <div className={s.container}>
            {
                startValue
                    ? <span className={s.editMode}>HELLO!<br/>
                        enter values and press 'set'</span>
                    : enterValue
                    ? <span className={s.editMode}>enter values and press set</span>
                    : errorValue
                        ? <span className={s.error}>Incorrect value!</span>
                        : numValue
                            ? <span className={numValueClassName}>{props.number}</span>
                            : ''
            }
            <div className={s.buttons}>
                <Button
                    name={'inc'}
                    disabled={disabledInc}
                    onClick={props.inc}
                />
                <Button
                    name={'reset'}
                    disabled={disabledReset}
                    onClick={props.reset}
                />
            </div>
        </div>
    )
}



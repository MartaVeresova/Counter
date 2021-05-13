import React from 'react';
import s from './App.module.css';
import {Button} from './Button';

export type CounterType = {
    inc: () => void
    reset: () => void
    number: number
    maxValue: number
    startValue: number
    errorMax: boolean
    errorStart: boolean
    editMode: boolean
}

export function Counter(props: CounterType) {
    const disabledInc = props.number === props.maxValue || props.editMode || props.startValue < 0 || props.maxValue < 0 || props.maxValue < props.startValue
    const disabledReset = !props.number || props.errorStart || props.errorMax || props.startValue < 0 || props.maxValue < 0 || props.maxValue < props.startValue

    return (
        <div className={s.container}>
            <span>
                {
                    props.editMode && !props.errorMax && !props.errorStart
                        ? <span className={`${s.number} ${s.editMode}`}>enter values and press set</span>
                        : props.errorMax || props.errorStart || props.number < 0 || props.maxValue <= props.startValue
                        ? <span className={`${s.number} ${s.error}`}>Incorrect value!</span>
                        : !props.editMode && !props.errorMax && !props.errorStart
                            ? <span
                                className={props.number === props.maxValue ? `${s.number} ${s.maxNumber}` : `${s.number}`}>{props.number} </span>
                            : null
                }
            </span>

            <div className={s.buttons}>
                <Button
                    name={'inc'}
                    disabled={disabledInc}
                    onClickButton={props.inc}
                />
                <Button
                    name={'reset'}
                    disabled={disabledReset}
                    onClickButton={props.reset}
                />
            </div>
        </div>
    )
}



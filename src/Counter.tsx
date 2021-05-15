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
}

export function Counter(props: CounterType) {

    // //
    // const testFunc = (editMode, startValue, ............) {
    //     const disabledInc =
    //         props.number === props.maxValue
    //         || editMode
    //         || startValue < 0
    //         || maxValue < 0
    //         || maxValue < startValue
    //
    //     const disabledReset =
    //         !props.number
    //         || errorStart
    //         || errorMax
    //         || startValue < 0
    //         || maxValue < 0
    //         || maxValue <= startValue
    //
    // const 3 =  props.editMode && !props.errorMax && !props.errorStart
    //     return {disabledInc, disabledReset, 3};
    // }
    // const {disabledinc, disabledReset} = testFunc(props.editMode, props.startValue, ............)

    const enterValue = props.editMode && !props.error
    const errorValue = props.error || props.maxValue <= props.startValue
    const numValue = !props.editMode && !props.error

    const numValueClassName =
        props.number === props.maxValue
            ? `${s.number} ${s.maxNumber}`
            : `${s.number}`

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
                enterValue
                    ? <span className={`${s.number} ${s.editMode}`}>enter values and press set</span>
                    : errorValue
                    ? <span className={`${s.number} ${s.error}`}>Incorrect value!</span>
                    : numValue
                        ? <span className={numValueClassName}>{props.number} </span>
                        : ''
            }
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



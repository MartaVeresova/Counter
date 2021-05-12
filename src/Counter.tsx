import React, {ChangeEvent} from 'react';
import s from './App.module.css';

export type CounterType = {
    inc: () => void
    reset: () => void
    number: number
    startValue: number
    maxValue: number
    errorMax: boolean
    errorStart: boolean
    editMode: boolean
    setEditMode: (editMode: boolean) => void
}

export type SettingBlockType = {
    startValue: number
    setStartValue: (value: number) => void
    number: number
    setNumber: (number: number) => void
    maxValue: number
    setMaxValue: (value: number) => void
    errorMax: boolean
    errorStart: boolean
    setErrorMax: (errorMax: boolean) => void
    setErrorStart: (errorStart: boolean) => void
    editMode: boolean
    setEditMode: (editMode: boolean) => void

}

export function Counter(props: CounterType) {

    /*const errorMessage = props.error || props.startValue <= props.maxValue
        ? <span>enter values and press set</span> //css-подобный объект; инлайновая стилизация
        : props.error || (props.startValue < 0 || props.maxValue < 0)
            ? <span style={{color: 'red'}}>Incorrect value!</span>
            : <span className={props.number === props.maxValue ? `${s.number} ${s.maxNumber}` : `${s.number}`}>
                {props.number}
            </span>*/

    return (
        <div className={s.container}>

            <span>
                {
                    props.editMode && !props.errorMax && !props.errorStart
                        ? <span className={`${s.number} ${s.editMode}`}>enter values and press set</span>
                        : props.errorMax || props.errorStart
                        ? <span className={`${s.number} ${s.error}`}>Incorrect value!</span>
                        : !props.editMode && !props.errorMax && !props.errorStart
                            ? <span
                                className={props.number === props.maxValue ? `${s.number} ${s.maxNumber}` : `${s.number}`}>{props.number} </span>
                            : null
                }
            </span>

            <div className={s.buttons}>
                <button className={s.button} onClick={props.inc}
                        disabled={props.number === props.maxValue || props.editMode}>inc
                </button>
                <button className={s.button} onClick={props.reset} disabled={!props.number || props.errorStart || props.errorMax}>reset
                </button>
            </div>
        </div>
    )
}

export function SettingBlock(props: SettingBlockType) {

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEditMode(true)
        props.setMaxValue(e.currentTarget.valueAsNumber)
        if (e.currentTarget.valueAsNumber < 0 || e.currentTarget.valueAsNumber < props.startValue) {
            props.setErrorMax(true)
            props.setErrorStart(false)
        } else if (e.currentTarget.valueAsNumber === props.startValue) {
            props.setErrorMax(true)
            props.setErrorStart(true)
        } else if (e.currentTarget.valueAsNumber > 0 && props.startValue === 0) {
            props.setErrorMax(false)
            props.setErrorStart(false)
        } else if (e.currentTarget.valueAsNumber > props.startValue) {
            props.setErrorMax(false)
            props.setErrorStart(false)
        } else props.setErrorMax(false)
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEditMode(true)
        props.setStartValue(e.currentTarget.valueAsNumber)
        if (e.currentTarget.valueAsNumber < 0 || e.currentTarget.valueAsNumber > props.maxValue) {
            props.setErrorStart(true)
            props.setErrorMax(false)
        } else if (e.currentTarget.valueAsNumber === props.maxValue) {
            props.setErrorStart(true)
            props.setErrorMax(true)
        } else if (e.currentTarget.valueAsNumber === 0 && e.currentTarget.valueAsNumber < props.maxValue) {
            props.setErrorStart(false)
            props.setErrorMax(false)
        } else if (e.currentTarget.valueAsNumber < props.maxValue) {
            props.setErrorStart(false)
            props.setErrorMax(false)
        } else props.setErrorStart(false)
    }

    const onClickButtonSet = () => {
        props.setNumber(props.startValue)
        props.setEditMode(!props.editMode)
    }

    return (
        <div className={s.container}>
            <div className={s.number}>
                <div className={s.input}>
                    {/*<span>max value:</span>*/}
                    <input
                        className={props.errorMax ? `${s.input} ${s.errorInput}` : s.input}
                        type="number"
                        value={props.maxValue}
                        onChange={onChangeMaxValue}
                    />
                    {/*<span>start value:</span>*/}
                    <input
                        className={props.errorStart ? `${s.input} ${s.errorInput}` : s.input}
                        type="number"
                        value={props.startValue}
                        onChange={onChangeStartValue}
                    />
                </div>
            </div>
            <button className={s.button} onClick={onClickButtonSet} disabled={props.errorMax || props.errorStart}>
                set
            </button>
        </div>
    )
}
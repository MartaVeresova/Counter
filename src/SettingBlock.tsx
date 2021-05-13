import React, {ChangeEvent} from 'react';
import s from './App.module.css';
import {Button} from './Button';
import {Input} from './Input';

export type SettingBlockType = {
    setNumber: (number: number) => void
    startValue: number
    setStartValue: (value: number) => void
    maxValue: number
    setMaxValue: (value: number) => void
    errorMax: boolean
    setErrorMax: (errorMax: boolean) => void
    errorStart: boolean
    setErrorStart: (errorStart: boolean) => void
    editMode: boolean
    setEditMode: (editMode: boolean) => void
}

export function SettingBlock(props: SettingBlockType) {

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const valueMax = e.currentTarget.valueAsNumber
        props.setEditMode(true)
        props.setMaxValue(valueMax)
        if (valueMax <= props.startValue) {
            props.setErrorMax(true)
            props.setErrorStart(true)
        } else if (valueMax < 0) {
            props.setErrorMax(true)
            props.setErrorStart(false)
        } else if (valueMax < 0 && props.startValue === 0) {
            props.setErrorMax(true)
            props.setErrorStart(false)
        } else {
            props.setErrorMax(false)
            props.setErrorStart(false)
        }
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const valueStart = e.currentTarget.valueAsNumber
        props.setEditMode(true)
        props.setStartValue(valueStart)
        if (valueStart >= props.maxValue) {
            props.setErrorStart(true)
            props.setErrorMax(true)
        } else if (valueStart < 0 && props.maxValue === 0) {
            props.setErrorStart(true)
            props.setErrorMax(true)
        } else {
            props.setErrorStart(false)
            props.setErrorMax(false)
        }
    }

    const onClickButtonSet = () => {
        props.setNumber(props.startValue)
        props.setEditMode(!props.editMode)
    }

    return (
        <div className={s.container}>
            <div className={s.number}>
                <div className={s.input}>
                    <Input
                        error={props.errorMax || props.maxValue <= props.startValue}
                        value={props.maxValue}
                        onChange={onChangeMaxValue}
                        text={'max value:'}
                    />
                    <Input
                        error={props.errorStart || props.startValue >= props.maxValue || props.startValue < 0}
                        value={props.startValue}
                        onChange={onChangeStartValue}
                        text={'start value:'}
                    />
                </div>
            </div>

            <div className={s.buttons}>
                <Button
                    name={'set'}
                    disabled={props.errorMax || props.errorStart || props.startValue < 0 || props.startValue >= props.maxValue}
                    onClickButton={onClickButtonSet}
                />
            </div>
        </div>
    )
}


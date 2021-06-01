import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './App.module.css';
import {Button} from './Button';
import {Input} from './Input';

export type SettingBlockType = {
    setNumber: (number: number) => void
    startValue: number
    setStartValue: (value: number) => void
    maxValue: number
    setMaxValue: (value: number) => void
    error: boolean
    setError: (error: boolean) => void
    editMode: boolean
    setEditMode: (editMode: boolean) => void
    start: boolean
    setStart: (start: boolean) => void
}


export function SettingBlock(props: SettingBlockType) {

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEditMode(true)
        props.setMaxValue(e.currentTarget.valueAsNumber)
        props.setStart(false)
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEditMode(true)
        props.setStartValue(e.currentTarget.valueAsNumber)
        props.setStart(false)
    }

    const onClick = () => {
        props.setEditMode(false)
        props.setNumber(props.startValue)
    }


    return (
        <div className={s.container}>
            <div className={s.number}>
                <div className={s.input}>
                    <Input
                        value={props.maxValue}
                        onChange={onChangeMaxValue}
                        text={'max value:'}
                        startValue={props.startValue}
                        maxValue={props.maxValue}
                        start={props.start}
                    />
                    <Input
                        value={props.startValue}
                        onChange={onChangeStartValue}
                        text={'start value:'}
                        startValue={props.startValue}
                        maxValue={props.maxValue}
                        start={props.start}
                    />
                </div>
            </div>

            <div className={s.buttons}>
                <Button
                    name={'set'}
                    disabled={props.error}
                    onClick={onClick}
                />
            </div>
        </div>
    )
}


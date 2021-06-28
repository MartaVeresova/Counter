import React, {ChangeEvent, useCallback} from 'react';
import s from './App.module.css';
import {Button} from './Button';
import {Input} from './Input';
import {useDispatch, useSelector} from 'react-redux';
import {pressSetAC, setErrorOfValueAC, setMaxValueAC, setMinValueAC} from './bll/counter-reducer';
import {AppStateType, store} from './bll/store';


export const SettingBlock = React.memo(() => {

    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const error = useSelector<AppStateType, boolean>(state => state.counter.error)
    const editMode = useSelector<AppStateType, boolean>(state => state.counter.editMode)
    const greeting = useSelector<AppStateType, boolean>(state => state.counter.greeting)
    const dispatch = useDispatch()


    const onChangeMaxValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        const min = store.getState().counter.minValue

        if (value <= min || value <= 0 || min < 0) {
            dispatch(setMaxValueAC(e.currentTarget.valueAsNumber))
            dispatch(setErrorOfValueAC())
        } else {
            dispatch(setMaxValueAC(e.currentTarget.valueAsNumber))
        }
    }, [dispatch])


    const onChangeMinValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        const max = store.getState().counter.maxValue

        if (max <= value || max <= 0 || value < 0) {
            dispatch(setMinValueAC(e.currentTarget.valueAsNumber))
            dispatch(setErrorOfValueAC())
        } else {
            dispatch(setMinValueAC(e.currentTarget.valueAsNumber))
        }
    }, [dispatch])

    const onClick = useCallback(() => {
        dispatch(pressSetAC())
    }, [dispatch])


    return (
        <div className={s.container}>
            <div className={s.number}>
                <div className={s.input}>
                    <Input
                        value={maxValue}
                        onChange={onChangeMaxValue}
                        text={'max value:'}
                        minValue={minValue}
                        maxValue={maxValue}
                        greeting={greeting}
                    />
                    <Input
                        value={minValue}
                        onChange={onChangeMinValue}
                        text={'min value:'}
                        minValue={minValue}
                        maxValue={maxValue}
                        greeting={greeting}
                    />
                </div>
            </div>

            <div className={s.buttons}>
                <Button
                    name={'set'}
                    disabled={error || !editMode}
                    onClick={onClick}
                />
            </div>
        </div>
    )
})


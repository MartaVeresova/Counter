import React, {useCallback} from 'react';
import s from './App.module.css';
import {Button} from './Button';
import {incNumberAC, resetNumberAC} from './bll/counter-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './bll/store';


export const Counter = React.memo(() => {

    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    const number = useSelector<AppStateType, number>(state => state.counter.number)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const error = useSelector<AppStateType, boolean>(state => state.counter.error)
    const editMode = useSelector<AppStateType, boolean>(state => state.counter.editMode)
    const greeting = useSelector<AppStateType, boolean>(state => state.counter.greeting)

    const dispatch = useDispatch()

    const inc = useCallback(() => {
        dispatch(incNumberAC())
    }, [dispatch])
    const reset = useCallback(() => dispatch(resetNumberAC()), [dispatch])


    const isGreet = greeting
    const enterValue = editMode && !error
    const errorValue = error || maxValue <= minValue
    const numValue = !editMode && !error

    const numValueClassName = number === maxValue
        ? `${s.maxNumber}`
        : `${s.number}`

    return (
        <div className={s.container}>
            {
                isGreet ?
                    <span className={s.editMode}>HELLO!<br/>enter values and press 'set'</span>
                    : enterValue ?
                    <span className={s.editMode}>enter values and press set</span>
                    : errorValue ?
                        <span className={s.error}>Incorrect value!</span>
                        : numValue ?
                            <span className={numValueClassName}>{number}</span>
                            : ''
            }
            <div className={s.buttons}>
                <Button
                    name={'inc'}
                    disabled={number === maxValue || editMode || error}
                    onClick={inc}
                />
                <Button
                    name={'reset'}
                    disabled={!number || error}
                    onClick={reset}
                />
            </div>
        </div>
    )
})



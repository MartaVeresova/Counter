import React from 'react';
import s from './App.module.css';
import {useSelector} from 'react-redux';
import {AppStateType} from './bll/store';


export const CounterDisplay = React.memo(() => {

    const number = useSelector<AppStateType, number>(state => state.counter.number)
    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const error = useSelector<AppStateType, boolean>(state => state.counter.error)
    const greeting = useSelector<AppStateType, boolean>(state => state.counter.greeting)
    const editMode = useSelector<AppStateType, boolean>(state => state.counter.editMode)


    const isGreet = greeting
    const enterValue = editMode && !error
    const errorValue = error || maxValue <= minValue
    const numValue = !editMode && !error

    const numValueClassName =
        number === maxValue
            ? `${s.maxNumber}`
            : `${s.number}`

    return (
        <div>
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
        </div>
    )
})



import React, {useCallback} from 'react';
import s from './App.module.css';
import {Button} from './Button';
import {incNumberAC, resetNumberAC} from './bll/counter-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './bll/store';
import {CounterDisplay} from './CounterDisplay';


export const Counter = React.memo(() => {

    const number = useSelector<AppStateType, number>(state => state.counter.number)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const error = useSelector<AppStateType, boolean>(state => state.counter.error)
    const editMode = useSelector<AppStateType, boolean>(state => state.counter.editMode)

    const dispatch = useDispatch()

    const inc = useCallback(() => {
        dispatch(incNumberAC())
    }, [dispatch])

    const reset = useCallback(() => dispatch(resetNumberAC()), [dispatch])


    return (
        <div className={s.container}>
            <CounterDisplay/>
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



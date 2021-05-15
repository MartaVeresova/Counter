import React, {useEffect, useState} from 'react';
import {Counter} from './Counter';
import s from './App.module.css'
import {SettingBlock} from './SettingBlock';

function App() {
    const [number, setNumber] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [errorMax, setErrorMax] = useState(false)
    const [errorStart, setErrorStart] = useState(false)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        const maxNewValue = localStorage.getItem('maxValue')
        const startNewValue = localStorage.getItem('startValue')

        if (maxNewValue) {
            setMaxValue(JSON.parse(maxNewValue))
        }
        if (startNewValue) {
            setStartValue(JSON.parse(startNewValue))
            setNumber(JSON.parse(startNewValue))
        }

        return;
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        setErrorOfMaxValue()
    }, [maxValue, startValue])


    const inc = () => setNumber(number + 1)
    const reset = () => setNumber(startValue)


    const setErrorOfMaxValue = () => {
        if (maxValue <= startValue) {
            setErrorMax(true)
            setErrorStart(true)
            return
        }
        if (maxValue < 0 || startValue < 0) {
            setErrorMax(true)
            setErrorStart(false)
            return
        }
        if (maxValue < 0 && startValue === 0) {
            setErrorMax(true)
            setErrorStart(false)
            return
        }
        setErrorMax(false)
        setErrorStart(false)
    }

    /*const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setNumber(e.currentTarget.valueAsNumber)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setNumber(e.currentTarget.valueAsNumber)
    }*/

    /*const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const valueStart = e.currentTarget.valueAsNumber
        setEditMode(true)
        setStartValue(valueStart)
        if (valueStart >= maxValue) {
            setErrorMax(true)
            setErrorStart(true)
        } else if (valueStart < 0 && maxValue === 0) {
            setErrorMax(true)
            setErrorStart(true)
        } else if (valueStart < 0) {
            setErrorStart(true)
            setErrorMax(false)
        } else {
            setErrorMax(false)
            setErrorStart(false)
        }
    }*/


    return (
        <div className={s.app}>
            <div>
                <SettingBlock
                    setNumber={setNumber}
                    startValue={startValue}
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}
                    errorMax={errorMax}
                    setErrorMax={setErrorMax}
                    errorStart={errorStart}
                    setErrorStart={setErrorStart}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    // onChangeStartValue={onChangeStartValue}
                    // onChangeMaxValue={onChangeMaxValue}
                />
            </div>
            <div>
                <Counter
                    inc={inc}
                    reset={reset}
                    number={number}
                    maxValue={maxValue}
                    startValue={startValue}
                    errorMax={errorMax}
                    errorStart={errorStart}
                    editMode={editMode}
                />
            </div>
        </div>
    );
}

export default App;

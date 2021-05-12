import React, {useEffect, useState} from 'react';
import {Counter, SettingBlock} from './Counter';
import s from './App.module.css'

function App() {
    const [number, setNumber] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [errorMax, setErrorMax] = useState(false)
    const [errorStart, setErrorStart] = useState(false)
    const [editMode, setEditMode] = useState(false)


    useEffect(() => {
        let maxNewValue = localStorage.getItem('maxValue')
        let startNewValue = localStorage.getItem('startValue')
        if (maxNewValue) {
            setMaxValue(JSON.parse(maxNewValue))
        }
        if (startNewValue) {
            setStartValue(JSON.parse(startNewValue))
            setNumber(JSON.parse(startNewValue))
        } else {
            setErrorMax(true)
            setErrorStart(true)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [maxValue, startValue])


    const inc = () => {
        setNumber(number + 1)
    }
    const reset = () => {
        setNumber(startValue)
    }

    return (
        <div className={s.app}>
            <SettingBlock
                startValue={startValue}
                setStartValue={setStartValue}
                number={number}
                setNumber={setNumber}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                errorMax={errorMax}
                setErrorMax={setErrorMax}
                errorStart={errorStart}
                setErrorStart={setErrorStart}
                editMode={editMode}
                setEditMode={setEditMode}
            />
            <Counter
                inc={inc}
                reset={reset}
                number={number}
                startValue={startValue}
                maxValue={maxValue}
                errorMax={errorMax}
                errorStart={errorStart}
                editMode={editMode}
                setEditMode={setEditMode}
            />
        </div>
    );
}

export default App;



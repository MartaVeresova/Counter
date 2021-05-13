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



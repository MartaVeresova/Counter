import React, {useEffect, useState} from 'react';
import {Counter} from './Counter';
import s from './App.module.css'
import {SettingBlock} from './SettingBlock';

function App() {
    const [number, setNumber] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [error, setError] = useState(false)
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
        //return;
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        setErrorOfValue()
    }, [maxValue, startValue])


    const inc = () => setNumber(number + 1)
    const reset = () => setNumber(startValue)

    // early return
    const setErrorOfValue = () => {
        if (maxValue <= startValue) {
            setError(true)

            return
        }
        if (maxValue < 0 || startValue < 0) {
            setError(true)

            return
        }
        if (maxValue < 0 && startValue === 0) {
            setError(true)

            return
        }
        setError(false)
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
                    error={error}
                    setError={setError}
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
                    error={error}
                    editMode={editMode}
                />
            </div>
        </div>
    );
}

export default App;

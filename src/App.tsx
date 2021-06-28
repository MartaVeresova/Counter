import React, {useEffect} from 'react';
import {Counter} from './Counter';
import s from './App.module.css'
import {SettingBlock} from './SettingBlock';
import {useDispatch} from 'react-redux';
import {resetNumberAC} from './bll/counter-reducer';

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetNumberAC())
    }, [dispatch])

    return (
        <div className={s.app}>
            <div>
                <SettingBlock/>
            </div>
            <div>
                <Counter/>
            </div>
        </div>
    );
}

export default App;

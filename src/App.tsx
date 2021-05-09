import React, {useState} from 'react';
import {Counter} from './Counter';

function App() {
    const [number, setNumber] = useState(0)
    const inc = () => {
        setNumber(number + 1)
    }
    const reset = () => {
        setNumber(0)
    }

    return (
        <div>
            <Counter
                inc={inc}
                reset={reset}
                number={number}
            />
        </div>
    );
}

export default App;



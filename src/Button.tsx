import s from './App.module.css';
import React from 'react';

export type ButtonType = {
    name: string
    disabled: boolean
    onClick: () => void
}

export const Button = React.memo(({name, disabled, onClick}: ButtonType) => {
    return (
        <div>
            <button
                className={s.button}
                onClick={onClick}
                disabled={disabled}
            >
                {name}
            </button>
        </div>
    )
})
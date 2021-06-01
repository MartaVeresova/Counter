import s from './App.module.css';
import React from 'react';

export type ButtonType = {
    name: string
    disabled: boolean
    onClick: () => void
}

export function Button(props: ButtonType) {
    return (
        <div>
            <button
                className={s.button}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.name}
            </button>
        </div>
    )
}
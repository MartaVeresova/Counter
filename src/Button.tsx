import s from './App.module.css';
import React from 'react';

export type ButtonType = {
    name: string
    disabled: boolean
    onClickButton: () => void
}

export function Button(props: ButtonType) {
    return (
        <div>
            <button
                className={s.button}
                onClick={props.onClickButton}
                disabled={props.disabled}
            >
                {props.name}
            </button>
        </div>
    )
}
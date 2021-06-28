type IncNumberType = ReturnType<typeof incNumberAC>
type ResetNumberType = ReturnType<typeof resetNumberAC>
type SetErrorOfValueType = ReturnType<typeof setErrorOfValueAC>
type PressSetType = ReturnType<typeof pressSetAC>
type SetMaxValueType = ReturnType<typeof setMaxValueAC>
type SetMinValueType = ReturnType<typeof setMinValueAC>

type ActionsType =
    IncNumberType
    | ResetNumberType
    | SetErrorOfValueType
    | PressSetType
    | SetMaxValueType
    | SetMinValueType

type InitialStateType = typeof initialState

export enum ACTIONS_TYPE {
    INC_NUMBER = 'Counter/INC-NUMBER',
    RESET_NUMBER = 'App/Counter/RESET-NUMBER',
    SET_ERROR_OF_VALUE = 'SettingBlock/SET-ERROR-OF-VALUE',
    PRESS_SET = 'SettingBlock/PRESS-SET',
    SET_MAX_VALUE = 'SettingBlock/SET-MAX-VALUE',
    SET_MIN_VALUE = 'SettingBlock/SET-MIN-VALUE',
}

const initialState = {
    number: 0,
    minValue: 0,
    maxValue: 0,
    error: false,
    editMode: false,
    greeting: true,
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {

        case ACTIONS_TYPE.INC_NUMBER:
            return {
                ...state,
                number: state.number + 1
            }
        case ACTIONS_TYPE.RESET_NUMBER:
            return {
                ...state,
                number: state.minValue
            }
        case ACTIONS_TYPE.SET_ERROR_OF_VALUE:
            return {
                ...state,
                error: true,
            }
        case ACTIONS_TYPE.PRESS_SET:
            return {
                ...state,
                editMode: false,
                number: state.minValue,
            }
        case ACTIONS_TYPE.SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.value,
                editMode: true,
                greeting: false,
                error: false,
            }
        case ACTIONS_TYPE.SET_MIN_VALUE:
            return {
                ...state,
                minValue: action.value,
                editMode: true,
                greeting: false,
                error: false,
            }

        default:
            return state
    }
}

export const incNumberAC = () => ({type: ACTIONS_TYPE.INC_NUMBER} as const)
export const resetNumberAC = () => ({type: ACTIONS_TYPE.RESET_NUMBER} as const)
export const setErrorOfValueAC = () => ({type: ACTIONS_TYPE.SET_ERROR_OF_VALUE} as const)
export const pressSetAC = () => ({type: ACTIONS_TYPE.PRESS_SET} as const)
export const setMaxValueAC = (value: number) => ({type: ACTIONS_TYPE.SET_MAX_VALUE, value} as const)
export const setMinValueAC = (value: number) => ({type: ACTIONS_TYPE.SET_MIN_VALUE, value} as const)


//THUNK

/*export const incNumberTC = (maxValue: number, minValue: number) => (dispatch: Dispatch) => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('minValue', JSON.stringify(minValue))
    dispatch(incNumberAC())
}

export const setValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
    const maxNewValue = localStorage.getItem('maxValue')
    const MINNewValue = localStorage.getItem('minValue')

    if (maxNewValue) {
        dispatch(setValueFromLocalStorageAC(JSON.parse(maxNewValue)))
        if (JSON.parse(maxNewValue) !== 0) {
            //dispatch(setValueFromLocalStorageAC(false))
        }
    }
    if (MINNewValue) {
        dispatch(setValueFromLocalStorageAC(JSON.parse(MINNewValue)))
        dispatch(setValueFromLocalStorageAC(JSON.parse(MINNewValue)))
        if (JSON.parse(MINNewValue) !== 0) {
            //dispatch(setValueFromLocalStorageAC(false))
        }
    }
}*/

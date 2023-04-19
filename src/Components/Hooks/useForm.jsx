import { useCallback, useReducer } from "react"



const formRaduser = (state, action) => {
    switch (action.type) {
        case 'VALID_FORM': {
            let isFormValid=true
            for (const Id in state.input) {
                if (Id === action.id) {
                    isFormValid = isFormValid && action.isValid
                } else {
                    isFormValid = isFormValid && state.input[Id].isValid
                }
            }
            return {
                ...state,
                input: {
                    ...state.input,
                    [action.id]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isValid: isFormValid,

            }
        }

            break;

        default: return { ...state }
            break;
    }
}

const useForm = (input, isValid) => {

    const [formState, dispatch] = useReducer(formRaduser, {
        input,
        isValid,
    })

    const onInputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'VALID_FORM',
            id,
            value,
            isValid,
        })
    },[])
    return  [formState, onInputHandler] 
}

export default useForm
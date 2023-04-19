import React, { useEffect, useReducer } from 'react'
import validator from '../validation/validator';


const inputInfoChange = (state, action) => {

    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.value,
                isValid: validator(action.value, action.validation)
            }
            break;

        default: return { ...state }
            break;
    }

}


export default function Input(props) {


    const [inputInfo, dispatch] = useReducer(inputInfoChange, {

        value: '',
        isValid: false
    })


    const changeInput = (e) => {
        dispatch({
            type: 'CHANGE',
            value: e.target.value,
            validation: props.validation,
            isValid: true,
        })
    }

    useEffect(() => {
        props.onInputHandler(props.id, inputInfo.value, inputInfo.isValid)
    }, [inputInfo.value])


    if (props.elem === 'input') {
        return (
            <input
                type={props.type}
                placeholder={props.placeholder}
                className={`${props.className} ${inputInfo.isValid ? 'inputvalid' : 'inputnotvalid'}`}
                value={inputInfo.value}
                onChange={(event) => { changeInput(event) }}
            />
        )
    } else {
        return (
            <textarea placeholder={props.placeholder}
                className={`${props.className} ${inputInfo.isValid ? 'inputvalid' : 'inputnotvalid'}`}
                value=''
                onChange={(event) => { changeInput(event) }}
            />
        )
    }



}


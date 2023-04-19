const maxVal = 'MAX_VAL'
const minVal = 'MIN_VAL'
const emailVal = 'EMAIL_VAL'
const numberVal = 'NUMBER_VAL'

export default { maxVal, minVal, emailVal, numberVal }




export const maxValidate = (max) => {
    return {
        type: maxVal,
        max,
    }
}
export const minValidate = (min) => {
    return {
        type: minVal,
        min,
    }
}
export const emailValidate = () => {
    return {
        type: emailVal,

    }
}
export const numberValidate = () => {
    return {
        type: numberVal,

    }
}

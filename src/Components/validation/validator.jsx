import roules from "./roules"
import { TestEmail, TestNumber } from './regex'



export default function validator(value, validate) {

    let isValid = []

    validate.forEach(item => {
        if (item.type === roules.maxVal) {
            value.trim().length > item.max && isValid.push(false)
        } else if (item.type === roules.minVal) {
            value.trim().length < item.min && isValid.push(false)
        } else if (item.type === roules.emailVal) {
            !TestEmail(value) && isValid.push(false)
        } else if (item.type === roules.numberVal) {
            !TestNumber(value) && isValid.push(false)
        }
    })

    return isValid.length === 0 ? true : false



}
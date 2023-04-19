const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const numberRegex = /^[0-9]{10,11}$/

const TestEmail = value => {
    return emailRegex.test(value)
}
const TestNumber = value => {
    return numberRegex.test(value)
}

export { TestEmail,TestNumber  }

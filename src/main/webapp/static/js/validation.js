const submitButton = document.getElementById('submit')
const validColor = "#66B2FF"
const notValidColor = "#FF6666"
let isFieldsValid = {
    y:false,
    r:false
}
const RegEx = /^-?\d+([.,]\d+)?$/

function isValidY(yFieldVal) {
    if (!RegEx.test(yFieldVal)) {
        return false
    }
    return yFieldVal >= -5 && yFieldVal <= 3
}

function validateY() {
    let yField = document.getElementById('y')
    yField.style.borderWidth = '2px'
    if (isValidY(commaHandle(yField))) {
        yField.style.borderColor = validColor
        isFieldsValid.y = true
        if (isFieldsValid.y && isFieldsValid.r) {
            buttonSwitch(false)
        }
    } else {
        yField.style.borderColor = notValidColor
        buttonSwitch(true)
        isFieldsValid.y = false
    }
}


function isValidR(rFieldVal) {
    if (!RegEx.test(rFieldVal)) {
        return false
    }
    return rFieldVal >= 1 && rFieldVal <= 4
}

function validateR() {
    let rField = document.getElementById('r')
    rField.style.borderWidth = '2px'
    if (isValidR(commaHandle(rField))) {
        rField.style.borderColor = validColor
        isFieldsValid.r = true
        if (isFieldsValid.y && isFieldsValid.r) {
            buttonSwitch(false)
        }
    } else {
        rField.style.borderColor = notValidColor
        buttonSwitch(true)
        isFieldsValid.r = false
    }
}

function buttonSwitch(disable) {
    if (disable) {
        submitButton.disabled = true;
        submitButton.classList.remove('shown')
        submitButton.classList.add('hidden')
    } else {
        submitButton.disabled = false;
        submitButton.classList.remove('hidden')
        submitButton.classList.add('shown')
    }
}

function isValidX(xFieldVal) {
    if (!RegEx.test(xFieldVal)) {
        return false
    }
    return xFieldVal >= -3 && xFieldVal <= 5
}

function commaHandle(field) {
    return field.value.replace(',', '.')
}
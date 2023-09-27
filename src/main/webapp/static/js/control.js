window.request = superagent

function addHidden(theForm, key, value) {
    let input = document.createElement('input')
    input.type = 'hidden'
    input.name = key
    input.value = value
    theForm.appendChild(input)
    return input
}
function removeHidden(theForm, input) {
    theForm.removeChild(input);
}

let form = document.getElementById("data-form")
form.onsubmit = function () {
    let rField = document.getElementById("r")
    let yField = document.getElementById("y")
    rField.value = Number(commaHandle(rField)).toFixed(3)
    yField.value = Number(commaHandle(yField)).toFixed(3)
    let input = addHidden(form, "status", "fromForm")
    form.submit()
    removeHidden(form, input)
}
function parseResponse(response) {
    return response.body;
}
function handleData({x, y, r, curDate, scriptTime, inArea}) {
    drawCircle(x, y, inArea)
    addData(x, y, r, curDate, scriptTime, inArea)
}
function showNotification() {
    let notificationField = document.getElementById("exception")
    notificationField.style.opacity = "1"
}

function hideNotification() {
    let notificationField = document.getElementById("exception")
    notificationField.style.opacity = "0"
}
function sendRequest(xVal, yVal, rVal) {
    request
        .get("/lab2/handle")
        .query({x : xVal, y : yVal, r : rVal, status : "fromCanvas"})
        .then(parseResponse)
        .then(handleData)
        .catch((exception) => console.log(exception))


}

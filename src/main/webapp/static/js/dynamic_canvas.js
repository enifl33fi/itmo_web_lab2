const cv = document.querySelector('canvas');
const width = cv.width
const height = cv.height
const radius = width * 0.42
const fontSize = 12
const ctx = cv.getContext("2d");
const rField = document.getElementById('r')

window.onload = fillCanvas
function fillCanvas() {
    hideNotification()
    let rVal = commaHandle(rField)
    ctx.strokeStyle = "#D0D0D0"
    ctx.fillStyle = "#66B2FF88"
    ctx.clearRect(0, 0, width, height)
    if (isValidR(rVal)) {
        ctx.fillRect(width / 2 - radius / 2, height / 2, radius / 2, radius)
        ctx.beginPath()
        ctx.moveTo(width / 2, height/ 2 + radius)
        ctx.lineTo(width/ 2 + radius/ 2, height / 2)
        ctx.arc(width / 2, height / 2, radius/ 2, 0, -Math.PI / 2, true)
        ctx.lineTo(width / 2, height/ 2 - radius / 2)
        ctx.lineTo(width / 2, height/ 2 + radius)
        ctx.fill()
    }

    ctx.beginPath()
    ctx.moveTo(width / 2, height)
    ctx.lineTo(width / 2, 0)
    ctx.lineTo(width / 2 + 5, 10)
    ctx.moveTo(width / 2, 0)
    ctx.lineTo(width / 2 - 5, 10)

    ctx.moveTo(0, height / 2)
    ctx.lineTo(width, height / 2)
    ctx.lineTo(width - 10, height / 2 + 5)
    ctx.moveTo(width, height / 2)
    ctx.lineTo(width - 10, height / 2 - 5)

    ctx.moveTo(width / 2 + radius / 2, height / 2 + 5)
    ctx.lineTo(width / 2 + radius / 2, height / 2 - 5)

    ctx.moveTo(width / 2 + radius, height / 2 + 5)
    ctx.lineTo(width / 2 + radius, height / 2 - 5)

    ctx.moveTo(width / 2 - radius / 2, height / 2 + 5)
    ctx.lineTo(width / 2 - radius / 2, height / 2 - 5)

    ctx.moveTo(width / 2 - radius, height / 2 + 5)
    ctx.lineTo(width / 2 - radius, height / 2 - 5)

    ctx.moveTo(width / 2 + 5, height / 2  + radius / 2)
    ctx.lineTo(width / 2 - 5, height / 2  + radius / 2)

    ctx.moveTo(width / 2 + 5, height / 2 + radius)
    ctx.lineTo(width / 2 - 5, height / 2 + radius)

    ctx.moveTo(width / 2 + 5, height / 2  - radius / 2)
    ctx.lineTo(width / 2 - 5, height / 2  - radius / 2)

    ctx.moveTo(width / 2 + 5, height / 2 - radius)
    ctx.lineTo(width / 2 - 5, height / 2 - radius)

    ctx.font = `bold ${fontSize} px serif`
    ctx.fillStyle = "#D0D0D0"

    ctx.fillText("x", width - fontSize / 2, height / 2 + 15)

    ctx.fillText("y", width / 2 + 10, fontSize / 2)

    if (isValidR(rVal))  {
        ctx.fillText(rVal, width / 2 + 10, height / 2 - radius + fontSize / 2)
        ctx.fillText(rVal / 2, width / 2 + 10, height / 2 - radius / 2 + fontSize / 2)
        ctx.fillText(-rVal, width / 2 + 10, height / 2 + radius + fontSize / 2)
        ctx.fillText(-rVal / 2, width / 2 + 10, height / 2 + radius / 2 + fontSize / 2)

        ctx.fillText(-rVal, width / 2 - radius - fontSize / 2, height / 2 - 10)
        ctx.fillText(-rVal / 2, width / 2 - radius / 2 - fontSize / 2, height / 2 - 10)
        ctx.fillText(rVal, width / 2 + radius - fontSize / 2, height / 2 - 10)
        ctx.fillText(rVal / 2, width / 2 + radius / 2 - fontSize / 2, height / 2 - 10)

    }
    ctx.stroke()
    if (isValidR(rVal))  {
        drawAllCircles()
    }

}
function drawCircle(x, y, isHit) {
    ctx.fillStyle = "#FF9999"
    if (isHit) {
        ctx.fillStyle = "#99FF99"
    }
    let xCoord = width / 2 + (x * radius / rField.value)
    let yCoord = height / 2 - (y * radius / rField.value)

    ctx.beginPath()
    ctx.arc(xCoord, yCoord, 3, 0, 2 * Math.PI)
    ctx.fill()
}

function drawAllCircles() {
    let table = document.getElementById("data-table")
    let tRows  = table.rows
    let tLen = tRows.length
    for (let i = 1; i < tLen; i++) {
        let tCells = table.rows.item(i).cells
        let x = parseFloat(tCells[0].innerHTML)
        let y = parseFloat(tCells[1].innerHTML)
        let inArea = tCells[5].innerHTML === "С пивом потянет"
        drawCircle(x, y, inArea)
    }
}
cv.onclick = sendPressedPoint
function sendPressedPoint(ev) {
    let rVal = commaHandle(rField)
    if (isValidR(rVal))  {
        let rect = cv.getBoundingClientRect();
        let x = ev.clientX - rect.left;
        let y = ev.clientY - rect.top;
        let xCoord = Number((x - width / 2) * rVal / radius).toFixed(3)
        let yCoord = Number((height / 2 - y) * rVal / radius).toFixed(3)
        if (isValidX(xCoord) && isValidY(yCoord)) {
            sendRequest(xCoord, yCoord, rVal);
        } else {
            drawCircle(xCoord, yCoord, false)
        }
    }
    else {
        showNotification()
    }
}
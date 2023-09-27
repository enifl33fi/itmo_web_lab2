function addData(x, y, r, curDate, scriptTime, inArea) {
    let stringResult = "Говно, переделывай";
    let colorResult = "#FF9999";
    if (inArea) {
        stringResult = "С пивом потянет";
        colorResult = "#99FF99";
    }
    let table = document.getElementById("data-table")
    let newRow = table.insertRow(table.rows.length)
    newRow.insertCell(0).innerHTML = x;
    newRow.insertCell(1).innerHTML = y;
    newRow.insertCell(2).innerHTML = r;
    newRow.insertCell(3).innerHTML = new Date(curDate).toLocaleString();
    newRow.insertCell(4).innerHTML = scriptTime;
    newRow.insertCell(5).innerHTML = stringResult;
    newRow.cells.item(5).style.color = colorResult;
}
let columns = 0;
let rows = 0;
let table = document.querySelector('table');
document.querySelector('#table-rows').oninput = function () {
    rows = this.value;
    if (!isNaN(rows) && (rows > 0) && !isNaN(columns) && (columns > 0)) {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; index++) {
                var tr = document.createElement("tr");
                document.body.appendChild(tr);
            }
        }
    }
}

// document.querySelector('#table-columns').oninput = function () {

// }
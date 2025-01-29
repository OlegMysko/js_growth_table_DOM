"use strict";
// write code here
const butonAddColum = document.querySelector(".append-column");
butonAddColum.addEventListener("click", ()=>{
    const firstRow = document.querySelector("tr");
    if (firstRow.cells.length >= 10) {
        butonAddColum.disabled = true;
        return;
    }
    butonRemoveColum.disabled = false;
    document.querySelectorAll("tr").forEach((row)=>{
        const firstCell = row.cells[0];
        if (!firstCell) return;
        const cloneCell = firstCell.cloneNode(true);
        row.appendChild(cloneCell);
    });
});
const butonAddRow = document.querySelector(".append-row");
butonAddRow.addEventListener("click", ()=>{
    const rows = document.querySelectorAll("tr");
    if (rows.length >= 10) {
        butonAddRow.disabled = true;
        return;
    }
    butonRemoveRow.disabled = false;
    const firstRow = rows[0];
    const cloneRow = firstRow.cloneNode(true);
    firstRow.parentNode.appendChild(cloneRow);
});
const butonRemoveRow = document.querySelector(".remove-row");
butonRemoveRow.addEventListener("click", ()=>{
    const rows = document.querySelectorAll("tr");
    if (rows.length <= 2) {
        butonRemoveRow.disabled = true;
        return;
    }
    butonAddRow.disabled = false;
    rows[rows.length - 1].remove();
});
const butonRemoveColum = document.querySelector(".remove-column");
butonRemoveColum.addEventListener("click", ()=>{
    const firstRow = document.querySelector("tr");
    if (firstRow.cells.length <= 2) {
        butonRemoveColum.disabled = true;
        return;
    }
    butonAddColum.disabled = false;
    document.querySelectorAll("tr").forEach((row)=>{
        const lastCell = row.cells[row.cells.length - 1];
        lastCell.remove();
    });
});

//# sourceMappingURL=index.f75de5e1.js.map

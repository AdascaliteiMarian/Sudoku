var grid = document.getElementById("grid");
var copyNumber;
var FirstArrayNumbers = new Array;
var gridlimit = 8;
var rowCounter = 0;
var shiftArray = 3;
var inputNumber;
createGrid();
function createGrid(){
    var yes = 1;
    for(var i = 0; i < 9; ++i) {
        row = grid.insertRow(i);
        for(var j = 0; j < 9; ++j) {
            cell = row.insertCell(j);
            cell.onclick = function() {
                clickCell(this)
            }
            var item = document.createAttribute("item");
            cell.setAttributeNode(item);
        }
    }
    hideNumbers();
    generateFirstRow()
}

function generateFirstRow(){
    for(var i = 0; i < 1; ++i){
        for(var j = 0 ; j < 9; ++j){
            cell = grid.rows[i].cells[j];
            number = Math.floor(Math.random() * 9) + 1;
            if(cell.innerHTML == "" && j == 0){
                cell.innerHTML = number;
            } else {
                if(checkPreviousNumbers(i, j, number) == true) {
                    cell.innerHTML = copyNumber;
                }
            }
        }
    }
    permutari()
}
function checkPreviousNumbers(i, j, number){
   copyNumber = number;
    var flag = 0;
    var saveI = j;
    for( j = j-1; j >= 0; --j){
        cell2 = grid.rows[i].cells[j].innerHTML
        if(cell2 != copyNumber){
            flag = 1;
        } else {
            flag = 0;
            copyNumber = Math.floor(Math.random() * 9) + 1;
            j =saveI;
        }
    }
    if(flag == 1){
         return true;
    }
}

function permutari(){
    for(i = 0; i <= gridlimit; ++i){
        FirstArrayNumbers.push(grid.rows[rowCounter].cells[i].innerHTML)
    }
    shiftNumbers(shiftArray = 3);
    shiftNumbers(shiftArray = 3);
    shiftNumbers(shiftArray = 1);
    shiftNumbers(shiftArray = 3);
    shiftNumbers(shiftArray = 3);
    shiftNumbers(shiftArray = 1);
    shiftNumbers(shiftArray = 3);
    shiftNumbers(shiftArray = 3);
}

function shiftNumbers() {
    for(k = 0; k < shiftArray; ++k){
        x = FirstArrayNumbers[0];
        for(i = 1; i <= gridlimit; ++i){
            FirstArrayNumbers[i-1] = FirstArrayNumbers[i];
        }
        FirstArrayNumbers[gridlimit] = x;
    }
    for(k = 0; k <= gridlimit; ++k){
        grid.rows[rowCounter +1].cells[k].innerHTML = FirstArrayNumbers[k];
    }
    ++rowCounter;
}

function hideNumbers(){
    for(var g = 0; g < 100; ++g){
        var row = Math.floor(Math.random() * 9);
        var col = Math.floor(Math.random() * 9);
        var cell4 = grid.rows[row].cells[col];
        cell4.className = "hidden";
    }
}

function clickCell(cell){
    if(cell.innerHTML == inputNumber){
    cell.className = "";
    cell.innerHTML = inputNumber;
    } else {
    alert("U lost");
    }
}

function functie() {
   inputNumber =  $('#inputNumber').val();
}
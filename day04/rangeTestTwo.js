/**
 * Created by 219390 on 2015/11/6.
 */
function deleteChar(){
    var div = document.getElementById("myDiv");
    var textNode = div.firstChild;
    var rangeObj = document.createRange();
    rangeObj.setStart(textNode,1);
    rangeObj.setEnd(textNode,4);
    rangeObj.deleteContents();
};
function deleteRow(){
  var table = document.getElementById("myTable");
    if(table.rows.length>0){
        var row = table.rows[0];
        var rangeObj = document.createRange();
        rangeObj.setStartBefore(row);
        rangeObj.setEndAfter(row);
        rangeObj.deleteContents();
    }
};
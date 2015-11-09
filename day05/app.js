/**
 * Created by 219390 on 2015/11/9.
 */
var boxdiv,boxdiv2,msgDiv,img1;
window.onload=function(){
   boxdiv = document.getElementById("box1");
    boxdiv2 = document.getElementById("box2");
    msgDiv = document.getElementById("msg");
    img1 = document.getElementById("img1");
    //boxdiv.ondragenter =function(e){
    //   showObj(e);
    //}
    boxdiv.ondragover = function(e){
        e.preventDefault();
    }
    boxdiv2.ondragover = function(e){
        e.preventDefault();
    }
    img1.ondragstart = function(e){
        e.dataTransfer.setData("imgId","img1");
    }
    boxdiv.ondrop =dropImghandler;
    boxdiv2.ondrop =dropImghandler;
};
function dropImghandler(e){
    showObj(e.dataTransfer);
    e.preventDefault();
    var img = document.getElementById(e.dataTransfer.getData("imgId"));
    e.target.appendChild(img);
};
function showObj(obj){
    var s="";
    for(var k in obj){
        s+=k+":"+obj[k]+"<br>";
    }
    msgDiv.innerHTML =s;
};
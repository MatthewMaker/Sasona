//document.getmyElementById("button").onclick = function () {
//    document.getElementById("text").style.display = 'block';
//    document.getElementById("text").style.visibility ='visible';
//};
function show(target){
document.getElementById(target).style.display = 'block';
document.getElementById("text").style.display = 'none';
}
function hide(target){
document.getElementById(target).style.display = 'none';
document.getElementById("text").style.display = 'block';
}
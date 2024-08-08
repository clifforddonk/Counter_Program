const increasebtn=document.getElementById("increasebtn")
const resetbtn=document.getElementById("resetbtn")
const decreasebtn=document.getElementById("decreasebtn")
const countlabel=document.getElementById("num")
let count=0;
increasebtn.onclick=function(){
    count++;
    countlabel.textContent = count;
}
resetbtn.onclick=function(){
    count=0;
    countlabel.textContent=0;
}
decreasebtn.onclick=function(){
    count--;
   countlabel.textContent=count;
}

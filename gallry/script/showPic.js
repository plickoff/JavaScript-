// function showPic(whichpic){
//   var source=whichpic.getAttribute("href");
//   var placeholder = document.getElementById("placeholder");
//   return placeholder.setAttribute("src",source);
// }
function display_alert()
{
alert("I am an alert box!!");
}

function insertAfter(newElement,targetElement){
  var parent =targetElement.parentNode;
  if (parent.lastChild==targetElement){
    parent.appendChild(newElement);
  }else{
    parent.insertBefore(newElement,targetElement,nextSibling);
  }
}

function preparePlaceholder(){
  if (!document.createElement) return false;
  if(!document.createTextNode) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById("imagegallery")) return false;
  var placeholder = document.createElement('img');
  placeholder.setAttribute("id","placeholder");
  placeholder.setAttribute("src","images/placeholder.gif");
  placeholder.setAttribute("alt","my image gallery")
}

function addLoadEvent(func){
  var oldonload =window.onload;
  if (typeof window.onload!='function'){
    window.onload =func;

  }
  else {
    window.onload=function(){
      oldonload;
      func();
    }
  }
}





function showPic(whichpic){
 if (!document.getElementById("placeholder")) return true;
var source =whichpic.getAttribute("href");
var placeholder=document.getElementById("placeholder");
  if (placeholder.nodeName !="IMG") return true;//placeholder.nodeName=="img"
placeholder.setAttribute("src",source);


if (!document.getElementById('description')) return false;
var text= whichpic.getAttribute("title")?
whichpic.getAttribute("title"):"";//检查whichpic。getAttribute（“title”）是否存在，若存在则执行第一步；若不存在，则执行第二步；
var description = document.getElementById("description");
if (description.firstChild.nodeType==3) {
description.firstChild.nodeValue = text;
}


return false;
}


function fenmiantu(){//点击标题返回主封面
var placeholder=document.getElementById("placeholder");
placeholder.setAttribute("src","images/placeholder.gif");
}


function prepareGallery(){
  if(!document.getElementsByTagName) return false;//check
   if(!document.getElementById) return false;//check
  if(!document.getElementById("imagegallery")) return false;//check

  var gallery =document.getElementById("imagegallery");
  var links =gallery.getElementsByTagName("a");
  console.info(links);
  for (var i=0;i<links.length;i++){
    links[i].onclick = function(){

     return showPic(this);

    }
  //links[i].onkeypress =links[i].onclick;
  }
}

addLoadEvent(prepareGallery);

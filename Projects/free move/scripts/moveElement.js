function moveElement(elementId,final_X,final_Y,interval){//间距
  if (!document.getElementById) return false;
  if (!document.getElementById(elementId)) return false;
  var elem=document.getElementById(elementId);
  var xpos=parseInt(elem.style.left);//parseInt是将字符串转化为整数
  var ypos=parseInt(elem.style.top);
  if (elem.movement){
    clearTimeout(elem.movement);
  }
  if (xpos==final_X&&ypos==final_Y){
    return true;//跳出整个moveElement函数

  }
  if (xpos<final_X){
    xpos++;
  }
  if (xpos>final_X){
    xpos--;
  }
  if (ypos<final_Y){
    ypos++;
  }
  if (ypos>final_Y){
    ypos--;
  }

  elem.style.left=xpos+"px";
  elem.style.top=ypos+"px";
  var repeat="moveElement('"+elementId+"','"+final_X+"','"+final_Y+"','"+interval+"')"
  elem.movement=setTimeout(repeat,interval);
  // console.info(movement);
}

function OrginallyPositionMessage(elementId,InputLeft,InputTop){//此函数用来设置element的初始位置；

    var elem = document.getElementById(elementId) ;
    elem.style.position="absolute";
    elem.style.left=InputLeft+"px";
    elem.style.top=InputTop+"px";

}
//left
function mouseove(){
  moveElement("message",125,125,10)
}
function mouseout(){

}

//right
// function mouseoveT(){
//   moveElement("message",50,50,10)
// }
// function mouseoutT(){
//
// }


function positionMessage(){
  if (!document.getElementById) return false;
  if (!document.getElementById("message")) return false;
  OrginallyPositionMessage("message",50,50);//设置初始位置
  var links=document.getElementsByTagName('a');
  // var information="onmouseover=\"onmouseover()\",onmouseover=\"onmouseout()\"";
  console.info(links);


}
  // moveElement("message",125,125,10)//设置最终位置(elementId,坐标x,坐标y，间隔(速度))


addLoadEvent(positionMessage);

function imageMove(links,a,b){

  links[a].onmouseover=function(){
    links[a].style.color="#ec8";
    moveElement('preview',-b,0,10);
  }
  links[a].onmouseout=function(){
    links[a].style.color="#000";
    moveElement('preview',this.left,this.top);//暂停移动
  }


}

function prepareSlideshow(){
//make sure the browser understand the DOM methods
if (!document.getElementsByTagName) return false;
if (!document.getElementById) return false;
//make sure the elements exist
if(!document.getElementById('linklist')) return false;
if(!document.getElementById('preview'))return false;
//apply styles to the preview image
OrginallyPositionMessage('preview',-0,-0);
var list =document.getElementById('linklist');
var links=list.getElementsByTagName('a');
//attach the animation behavior to the mouseover event

//textbook correct
//links[0].onmouseover=function(){
  // moveElement('preview',-100,0,10);
// }
//links[1].onmouseover=function(){
  // moveElement('preview',-200,0,10);
// }
//links[2].onmouseover=function(){
  // moveElement('preview',-300,0,10);
// }

//no.2 correct
imageMove(links,0,100);
imageMove(links,1,-100);


//no.1 failture
// var orgianlPositionX=-100;
// for (var i=0;i<3;i++){
//   links[i].onmouseover=function(){
//     moveElement('preview',orgianlPositionX,0,10);
//   }
//   orgianlPositionX-=100;
// }
}
addLoadEvent(prepareSlideshow);

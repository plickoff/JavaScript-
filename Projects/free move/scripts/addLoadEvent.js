var oldonload=window.onload;
function addLoadEvent(func){
if (typeof window.onload!="function"){
  oldonload=func()
}else{
  window.onload;
  func();
  }
}

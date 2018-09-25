//
//
//
//
//
//
// function creatColor1 (){
//   a=110;
// b=110;
// c=238;//6E6EEE
//
//   f=20;
//   for (var i=0;i<12;i++){
//     HEXnumber=RGB2HEX(a,b,c);
//
//     a-=10;
//     b-=10;
//     c-=10;
//     // var string=
//     creatEquals();
//
//     f+=12;
//   }
// }
//
//
// function creatColor2 (){
//   a=0;
//   b=0;
//   c=128;
//
//   f=20+12*12;
//   for (var i=0;i<12;i++){
//     HEXnumber=RGB2HEX(a,b,c);
//
//     a+=10;
//     b+=10;
//     c+=10;
//     // var string=
//     creatEquals();
//
//     f+=12;
//     // alert(HEXnumber);
//   }
// }
//
//
//
//
// function creatColor3 (){
//   a=240;
//   b=170;
//   c=0;
//
//   f=20+12*12+12*12;
//   for (var i=0;i<12;i++){
//     HEXnumber=RGB2HEX(a,b,c);
//     if (a<255){
//     a+=5;
//   }
//     if(b<255){
//     b+=5;
//   }
//     c+=10;
//     // var string=
//     creatEquals();
//
//     f+=12;
//     // alert(HEXnumber);
//   }
// }
//
// function creatColor4 (){
//   a=255;
//   b=170+12*5;
//   c=10*12;
//
//   f=20+12*12*3;
//   for (var i=0;i<12;i++){
//     HEXnumber=RGB2HEX(a,b,c);
//
//     a-=5;
//
//
//     b-=5;
//
//     c-=10;
//     // var string=
//     creatEquals();
//
//     f+=12;
//     // alert(HEXnumber);
//   }
// }
//
// function creatEquals(){
//   var c=document.getElementById("myCanvas");
//   var ctx=c.getContext("2d");
//   ctx.fillStyle="#"+HEXnumber;
//
//   ctx.fillRect(20,f,850,12);
//
// }
// function RGB2HEX(r, g, b) {
//   r_ = Math.ceil(r).toString(16)
//   g_ = Math.ceil(g).toString(16)
//   b_ = Math.ceil(b).toString(16)
//   h = r_.length < 2 ? "0" + r_ : r_
//   e = g_.length < 2 ? "0" + g_ : g_
//   x = b_.length < 2 ? "0" + b_ : b_
//   let HEX = (h.toUpperCase() + e.toUpperCase() + x.toUpperCase())
//   return HEX
// }
// addLoadEvent(creatColor1);
// addLoadEvent(creatColor2);
// addLoadEvent(creatColor3);
// addLoadEvent(creatColor4);

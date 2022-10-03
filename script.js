function imageSet(player , source) {
    element = document.querySelectorAll("img");
    element[player].src = source;
}
function randomGenerator(player) {
    
    var r = Math.floor( Math.random()*6 ) + 1 ;
    var imageSource = "images/dice" +r+ ".png";
    imageSet(player, imageSource);
    // if( r==1 ){
    //     imageSet(player, "images/dice1.png");
    // }else     if( r==2 ){
    //     imageSet(player, "images/dice2.png");
    // }else     if( r==3 ){
    //     imageSet(player, "images/dice3.png");
    // }else     if( r==4 ){
    //     imageSet(player, "images/dice4.png");
    // }else     if( r==5 ){
    //     imageSet(player, "images/dice5.png");
    // }else     if( r==6 ){
    //     imageSet(player, "images/dice6.png");
    // }
    return r;
}
document.querySelector(".btn").onclick = function() {
  document.querySelector(".sub-text").innerHTML = "";
  var p1 =  randomGenerator(0);
  var p2 =  randomGenerator(1);
  element = document.querySelector("h1");
  if(p1 > p2){
    element.innerHTML = "Player 1 Wins" ;
  }else if(p2 > p1){
    element.innerHTML = "Player 2 Wins" ;
  }else {
    element.innerHTML = " Draw, roll again"
  }
}

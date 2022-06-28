// var pl1=prompt("Player 1 Name");
// var pl2=prompt("Player 2 Name");


// document.querySelector("#p1").setAttribute("")

var randomNumber1=Math.floor(Math.random()*6)+1;


var dice_num="dice"+ randomNumber1 +".png";

var randonImageSource= "images/"+dice_num;

var img1=document.querySelectorAll(".img1")[0].setAttribute("src",randonImageSource);


var randomNumber2=Math.floor(Math.random()*6)+1;
var dice_num2="dice"+ randomNumber2 +".png";

var randonImageSource2= "images/"+dice_num2;

var img2=document.querySelectorAll(".img2")[0].setAttribute("src",randonImageSource2);



if(randomNumber1>randomNumber2){

  document.querySelector("h1").innerHTML="🚩Nikunj don Won";
}
else if(randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML="Aayushi Bandri Won🚩";


}
else{
  document.querySelector("h1").innerHTML="Are Yr Draw🤧";


}

document.querySelector("h1").innerHTML = "Refresh Me"

//  FOR DICE 1

var a = Math.floor( Math.random() * 6 ) + 1;

if( a == 1){
    document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
}
else if( a == 2){

    document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
}
else if(a ==  3){

    document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");

}

else if( a == 4 ){
    document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");

}
else if( a  == 5 ){
   
    document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");


}
else if( b == 6){

    document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
}

//  FOR DICE 2  

var b = Math.floor( Math.random() * 6 ) + 1;     

if( b == 1){
    document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
}
else if( b == 2){

    document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
}
else if( b ==  3){

    document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");

}

else if( b == 4 ){
    document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");

}
else if( b  == 5 ){
   
    document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");


}
else if( b == 6){

    document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
}


if( a > b ){
document.querySelector("h1").innerHTML = "Player 1 wins!"

}

else if( b > a){
    document.querySelector("h1").innerHTML = "Player 2 wins!"

}
else if(a == b){

    document.querySelector("h1").innerHTML = "Its a tie!"
}


setTimeout( () => { document.querySelector(".dice .img1").setAttribute("src", "images/dice00 (1).png");
document.querySelector(".dice .img2").setAttribute("src", "images/dice00 (1).png"); }, 2500);


setTimeout(() => { document.querySelector("h1").innerHTML = "Refresh Me!"  }, 2500);
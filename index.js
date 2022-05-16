
var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6+1);
var images=document.querySelector(".img1");
var dice="images/dice"+randomNumber1 +".png";
images.setAttribute("src",dice);



var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6+1);

var image2=document.querySelector(".img2");

var dice2="images/dice"+randomNumber2 +".png";
image2.setAttribute("src",dice2);
var h1=document.querySelector('h1');



if (randomNumber1>randomNumber2){
    h1.textContent="Player 1 Wins";
}

else if (randomNumber1<randomNumber2){
    h1.textContent="Player 2 Wins";
}
else if(randomNumber1==randomNumber2){
    h1.textContent="DRaw";
}
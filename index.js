var w = new Audio('./sounds/crash.mp3');
var a = new Audio('./sounds/kick-bass.mp3');
var s = new Audio('./sounds/snare.mp3'); 
var d = new Audio('./sounds/tom-1.mp3');
var j = new Audio('./sounds/tom-2.mp3');
var k = new Audio('./sounds/tom-3.mp3');
var l = new Audio('./sounds/tom-4.mp3');


for(var i = 0; i<document.querySelectorAll(".drum").length; i++) {
document.querySelectorAll("button")[i].addEventListener("click", function (){
    if(i === 1) {
        w.play();
    }
});
}
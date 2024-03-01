var w = new Audio('./sounds/crash.mp3');
var a = new Audio('./sounds/kick-bass.mp3');
var s = new Audio('./sounds/snare.mp3'); 
var d = new Audio('./sounds/tom-1.mp3');
var j = new Audio('./sounds/tom-2.mp3');
var k = new Audio('./sounds/tom-3.mp3');
var l = new Audio('./sounds/fart.mp3');

document.addEventListener("keydown", function(e){
    console.log(e);
    var key = e.key;
    switch (key) {
        case "w":
            w.play();
            console.log("W pressed");
            break;
        case "a":
            a.play();
            break;
        case "s":
            s.play();
            break;
        case "d":
            d.play();
            break;
        case "j":
            j.play();
            break;
        case "k":
            k.play();
            break;
        case "l":
            l.play();
            break;
        default:
            break;
    }
});

const btnd = document.getElementById("btn-down");
const btnu = document.getElementById("btn-up");
const elv = document.getElementById("elevator");
const flr = document.getElementById("floor");
let move = 0;
let fl = 1;
let sound = new Audio();
sound.src = "bell.mp3";
flr.textContent = fl;

btnd.addEventListener("click", function(){
    if (move > 0){
        elv.style.bottom = move - 80 + "px";
        move = move - 80;
        fl --;
        flr.textContent = fl;
        sound.play();
    }
});

btnu.addEventListener("click", function(){
    if (move <= 240){
        elv.style.bottom = move + 80 + "px";
        move = move + 80;
        fl ++;
        flr.textContent = fl;
        sound.play();
    }
});

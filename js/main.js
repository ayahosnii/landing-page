let img = document.querySelector('.img');
let container = document.querySelector('.container');
let landBtn = document.querySelector('.landBtn');

function lipstick(l){
    img.src = l;
}

function color(c){
    container.style.background = c;
}

function colorBtn(x){
    landBtn.style.color = x
}
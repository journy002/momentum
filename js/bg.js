const body = document.querySelector('body');

const bgNumber = 3;

function paintImg(bgNumber){
    const image = new Image();
    image.src = `./img/${bgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}

function randomCount(){
    const random = Math.floor(Math.random() * bgNumber);
    return random;
}

function init(){
    const getNumber = randomCount();
    paintImg(getNumber);
}

init();
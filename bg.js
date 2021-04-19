const body = document.querySelector('body');

// 2. 이미지 파일에서 이미지 불러오기
function paintImage(imgNumber){
    const image = new Image();
    // imgNumber + 1을 하는 이유는 Math.random() 함수가 0을 줄 수 있기 때문에.
    image.src = `./img/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}


// 랜덤한 이미지 갯수를 가져오기 위한 상수
const IMG_NUMBER = 3;
// 1. 랜덤한 번호를 가져온다.
function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();
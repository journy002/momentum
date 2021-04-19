const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    gret = document.querySelector('.js-gretting');

const USER_CN = 'currentUser';
const SHOWING_CN = 'showing';

function saveInfo(text){
    localStorage.setItem(USER_CN, text);
}

function eventHandler(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGretting(currentValue);
    saveInfo(currentValue);
}


function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', eventHandler);
}

function paintGretting(text){
    form.classList.remove(SHOWING_CN);
    gret.classList.add(SHOWING_CN);
    gret.innerText = `Hello!! ${text}`;
}


function loadGretting(){
    const currentUser = localStorage.getItem(USER_CN);
    if(currentUser === null){
        askForName();
    } else {
        paintGretting(currentUser);
    }
}

function init(){
    loadGretting();
};

init();
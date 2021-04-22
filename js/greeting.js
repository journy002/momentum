const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    grt = document.querySelector('.js-gretting');

const USER_CN = 'currentUser';
const SHOWING = 'showing';

function saveInfo(text){
    localStorage.setItem(USER_CN,text);
}

function paintGret(text){
    form.classList.remove(SHOWING);
    grt.classList.add(SHOWING);
    grt.innerText = `Hello ${text}`;
}

function eventHandler(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGret(currentValue);
    saveInfo(currentValue);
    input.value = '';
}

function askForName(){
    form.classList.add(SHOWING);
    form.addEventListener('submit',eventHandler);
}

function loadGret(){
    const currentUser = localStorage.getItem(USER_CN);
    if(currentUser === null){
        askForName();
    } else{
        paintGret(currentUser);
    }
}

function init(){
    loadGret();
}

init();
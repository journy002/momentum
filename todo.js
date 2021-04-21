const todoForm = document.querySelector('.js-todoForm'),
    todoInput = todoForm.querySelector('input'),
    todoList = document.querySelector('.js-todoList');

const TODOS_LS = 'todos'
let todos = [];

function saveTodo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function loadDelBtn(event){
    const clk = event.target;
    const li = clk.parentNode;
    todoList.removeChild(li);
    const cleanTodo = todos.filter(function(toDo){
        return toDo.id !== parseInt(li.id)
    })
    todos = cleanTodo
    saveTodo();
}

let idNumber = 1;

function toDoList(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = idNumber++;
    span.innerText = text;
    delBtn.innerText = 'x';
    delBtn.addEventListener('click', loadDelBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);
    const todoObj = {
        text:text,
        id:newId,
    }
    todos.push(todoObj);
    saveTodo();
}

function loadedInput(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    toDoList(currentValue);
    todoInput.value = '';
}

function loadedTodo(){
    const TodoList = localStorage.getItem(TODOS_LS);
    if(TodoList !== null){
        const parse = JSON.parse(TodoList);
        parse.forEach(function(todo){
            toDoList(todo.text);
        })
    }
}


function loadCancle(){
    const inputV = todoInput.value;
    if(inputV > 5){
        const Cbtn = document.createElement('button');
        Cbtn.innerText = 'x'
        console.log('555');
    }
}

function init(){
    loadedTodo();
    loadCancle();
    todoForm.addEventListener('submit',loadedInput);
};

init();
const todoForm = document.querySelector('.js-todoForm'),
    todoInput = todoForm.querySelector('input'),
    todoList = document.querySelector('.todoList');

const TODO_LS = 'todos';
let todos = [];

function saveTodo(){
    localStorage.setItem(TODO_LS, JSON.stringify(todos));
}

function deleteTodo(event){
    const del = event.target;
    const li = del.parentNode;
    todoList.removeChild(li);
    const cleanTodo = todos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    todos = cleanTodo
    saveTodo();
}

let idNumbers = 1;

function todoComponent(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerText = 'x';
    delBtn.addEventListener('click',deleteTodo)
    const span = document.createElement('span');
    span.innerText = text
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
    const newId = idNumbers;
    idNumbers += 1;
    li.id = newId;
    const liObj = {
        text: text,
        id: newId,
    }
    todos.push(liObj);
    todoInput.value = '';
    saveTodo();
}

function todoHandler(event){
    event.preventDefault();
    const todoText = todoInput.value;
    todoComponent(todoText);
}

function loadTodo(){
    const currentList = localStorage.getItem(TODO_LS);
    if(currentList !== null){
        const parsed = JSON.parse(currentList);
        parsed.forEach(function(todo){
            todoComponent(todo.text);
        })
    }
}

function init(){
    loadTodo();
    todoForm.addEventListener('submit', todoHandler);
}

init();
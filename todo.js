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
    if(text.length > 1){
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
    } else if(text < 1) {
        alert('1글자 이상 적어주세요.');
    }
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

// function loadCancel(){
//     const cancelBnt = document.createElement('button');
//     cancelBnt.addEventListener('click',cancelHandler);
//     cancelBnt.innerText = 'x';
// }

function init(){
    loadedTodo();
    // loadCancel();
    todoForm.addEventListener('submit',loadedInput);
};

init();
let todos = ['Complete Homework', 'Wash Dishes'];
const userInput = document.querySelector("#todo");
const addBtn = document.querySelector('#addBtn');
const container = document.querySelector('#container');

addBtn.addEventListener('click', () => {
    const newTodo = userInput.value;
    if (newTodo) {
        todos.push(newTodo);
        userInput.value = '';
        removeChildren(container);
        updateTodos();
    } else {
        alert("Type something first");
    }
});

function updateTodos() {
    todos.forEach((todo, idx) => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const btn = document.createElement('button');
        const id = `todo${idx}`

        div.setAttribute('id', id);
        btn.setAttribute('onclick', `deleteTodo(${id})`)
        p.innerHTML = todo;
        btn.innerHTML = 'Delete'
        div.appendChild(p);
        div.appendChild(btn);
        container.appendChild(div);
    });
}

function deleteTodo(id) {
    const deleteTodo = document.querySelector(`#${id.id}`);
    const todoName = deleteTodo.children[0].innerHTML;
    container.removeChild(deleteTodo);
    todos = todos.filter((todo) => {
        todo === todoName;
    });
}

function removeChildren(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

updateTodos();

const todoList = []

const todoInput = document.getElementById('todo-input')
const todoInputBtn = document.getElementById('todo-input-button')

todoInputBtn.addEventListener('click', function () {
    const text = todoInput.value

    window.alert(text)
})

todoInput.addEventListener('keydown', function (event) {
    const key = event.key

    if (key === 'Enter') {
        todoInputBtn.click()
    }
})


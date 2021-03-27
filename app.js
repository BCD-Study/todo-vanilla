
const todoInput = document.getElementById('todo-input')
const todoInputBtn = document.getElementById('todo-input-button')
const listEl = document.getElementById('list')

todoInputBtn.addEventListener('click', function () {
    const text = todoInput.value
    const li = document.createElement('li')

    li.innerText = text
    todoInput.value = ''

    li.addEventListener('click', function () {
        listEl.removeChild(li)
    })

    listEl.appendChild(li)
})

todoInput.addEventListener('keydown', function (event) {
    const key = event.key

    if (key === 'Enter') {
        todoInputBtn.click()
    }
})


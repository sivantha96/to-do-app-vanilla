const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const newTodoItem = prompt("Add a new todo");
  if (newTodoItem === null || newTodoItem === "") {
    alert("Todo item is not valid. Try again")
    newTodo()
  } else {
    if (newTodoItem.length > 30) {
      alert("Todo item is too long. Try again")
      newTodo()
    } else {
      // create list item
      const todoItem = document.createElement('li')
      todoItem.classList.add(classNames.TODO_ITEM)

      // create span
      const todoItemText = document.createElement('span')
      todoItemText.classList.add(classNames.TODO_TEXT)
      todoItemText.innerHTML = newTodoItem

      // create checkbox
      const todoCheckbox = document.createElement('input')
      todoCheckbox.classList.add(classNames.TODO_CHECKBOX)
      todoCheckbox.setAttribute("type", "checkbox")
      todoCheckbox.onclick = function() {
        countTodos()
      }

      // create delete button
      const todoDelete = document.createElement("button")
      todoDelete.classList.add(classNames.TODO_DELETE)
      todoDelete.innerHTML = "Delete"
      todoDelete.onclick = function() {
        list.removeChild(todoItem)
        countTodos()
      }

      todoItem.append(todoCheckbox, todoItemText, todoDelete)
      list.appendChild(todoItem)
      countTodos()
    }
  }
}

function countTodos(){
 let checkedTodos = document.querySelectorAll('input[type="checkbox"]:checked').length
 let allTodos = document.querySelectorAll('input[type="checkbox"]').length
 itemCountSpan.innerHTML = allTodos
 uncheckedCountSpan.innerHTML = allTodos - checkedTodos
}
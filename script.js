const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

//Add blank item
function addItem() {
  const itemText = todoInput.value.trim();
  if (todoInput.value.trim() == "") {
    alert("Item can not be blank.");
    return;
  }
  //button creates a new LI
  const li = document.createElement("li");
  li.textContent = itemText;

  li.addEventListener("click", deleteItem);
  todoList.appendChild(li);
  todoInput.value = "";
}

//Click on item in list will delete item
function deleteItem(event) {
  const listItem = event.target;
  const todoList = document.getElementById("todoList");
  todoList.removeChild(listItem);
}
//Clicking on current Practice item already loaded will delete item
const existingItem = document.querySelector("#todoList li");
if (existingItem) {
  existingItem.addEventListener("click", deleteItem);
}

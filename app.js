document.querySelector(".submit").addEventListener("click", function() {
  const value = document.querySelector(".input").value;
  if (value) addTodo(value);
  document.querySelector(".input").value = "";
});

addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const value = document.querySelector(".input").value;
    if (value) addTodo(value);
    document.querySelector(".input").value = "";
  }
});

function addTodo(text) {
  const task = document.createElement("p");
  task.classList.add("task");
  task.innerText = text;

  const list = document.querySelector(".list");
  const background = document.querySelector(".background");
  if (list.hasChildNodes) {
    background.style.display = "none";
  }

  const todo = document.createElement("li");
  todo.classList.add("todo");

  const checkbox = document.createElement("button");
  checkbox.classList.add("checkbox");
  const checkboxIcon = document.createElement("i");
  checkboxIcon.classList.add("fas");
  checkboxIcon.classList.add("fa-check");
  checkbox.addEventListener("click", function() {
    if (checkboxIcon.style.color == "var(--color-main)") {
      checkboxIcon.style.color = "var(--color-container)";
      task.style.textDecoration = "none";
    } else {
      checkboxIcon.style.color = "var(--color-main)";
      task.style.textDecoration = "line-through";
    }
  });

  const trash = document.createElement("button");
  trash.classList.add("trash");
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fas");
  trashIcon.classList.add("fa-trash");
  trash.addEventListener("click", function() {
    this.parentNode.parentNode.removeChild(this.parentNode);
  });

  trash.addEventListener("click", function() {
    if (list.hasChildNodes()) {
      background.style.display = "none";
    } else {
      background.style.display = "block";
    }
  });

  list.insertBefore(todo, list.childNodes[0]);
  todo.appendChild(task);
  todo.appendChild(checkbox);
  checkbox.appendChild(checkboxIcon);
  todo.appendChild(trash);
  trash.appendChild(trashIcon);
}

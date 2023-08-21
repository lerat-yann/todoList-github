const form = document.querySelector("form");

function storeTodo() {
  window.localStorage.stockTodo = list.innerHTML;
}

function getTodo() {
  if (window.localStorage.stockTodo) {
    list.innerHTML = window.localStorage.stockTodo;
  } else {
    list.innerHTML = "<li>Cliquez sur une todo pour la supprimer</li>";
  }
}

window.addEventListener("load", getTodo);
// getTodo();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeTodo();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeTodo();
});

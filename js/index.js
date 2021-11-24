const ourForm = document.getElementById("ourForm");
const inputField = document.getElementById("inputField");
const ourList = document.getElementById("ourList");

ourForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createItem(inputField.value);
});

function createItem(x) {
  let innerWord = `<li><p>${x}</p><button onClick="deleteItem(this)">Delete</button></li>`;
  ourList.insertAdjacentHTML("beforeend", innerWord);
  inputField.value = "";
  inputField.focus();
}

function deleteItem(deleteThis) {
  deleteThis.parentElement.remove();
}

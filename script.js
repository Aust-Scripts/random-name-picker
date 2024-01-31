const list = [];
const listContainer = document.getElementById('list');

document.getElementById('name-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name');
  list.push(name.value);
  console.log(list);

  listContainer.innerHTML = '';

  for (let i = list.length - 1; i >= 0; i--) {
    const newListItem = document.createElement('li');
    newListItem.textContent = list[i];
    listContainer.appendChild(newListItem);
  }

  name.value = '';
});
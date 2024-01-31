const list = [];
const listContainer = document.getElementById('list');

document.getElementById('name-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name');
  list.push(name.value);
  console.log(list);

  const newListItem = document.createElement('li');
  newListItem.textContent = name.value;
  listContainer.appendChild(newListItem);

  name.value = '';
});
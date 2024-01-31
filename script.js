const list = [];
const listContainer = document.getElementById('list');

document.getElementById('name-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name');
  list.push(name.value);

  listContainer.innerHTML = '';
  name.value = '';

  for (let i = list.length - 1; i >= 0; i--) {
    const newListItem = document.createElement('li');
    newListItem.textContent = list[i];
    listContainer.appendChild(newListItem);
  };
});

document.getElementById('random-name-button').addEventListener('click', () => {
  const randomNum = Math.floor(Math.random() * list.length);
  const nameContainer = document.getElementById('random-name');

  nameContainer.innerHTML = '';
  nameContainer.textContent = list[randomNum];
})
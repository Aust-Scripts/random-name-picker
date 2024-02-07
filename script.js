const nameList = [];
const listContainer = document.getElementById('list');

document.getElementById('name-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name');
  if (name.value === '') return; //Ignores empty names
  nameList.push(name.value);

  listContainer.innerHTML = '';
  name.value = '';

  for (let i = nameList.length - 1; i >= 0; i--) {
    const newListItem = document.createElement('li');
    newListItem.textContent = nameList[i];
    listContainer.appendChild(newListItem);
  };
});

document.getElementById('random-name-button').addEventListener('click', () => {
  const randomNum = Math.floor(Math.random() * nameList.length);
  const nameContainer = document.getElementById('random-name-display');

  nameContainer.innerHTML = '';
  nameContainer.textContent = nameList[randomNum];
})
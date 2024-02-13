let nameList = [];
const listContainer = document.getElementById('list');
const nameContainer = document.getElementById('get-name-display');

function displayList() {
  for (let i = nameList.length - 1; i >= 0; i--) {
    const newListItem = document.createElement('li');
    newListItem.textContent = nameList[i];
    listContainer.appendChild(newListItem);
  };
}

const form = document.getElementById('name-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name');
  if (name.value === '') return; //Ignores empty names
  nameList.push(name.value);

  listContainer.innerHTML = '';
  name.value = '';

  // function addDeleteButton?

  displayList();

  const namesStringified = JSON.stringify(nameList);
  localStorage.setItem('namesList', namesStringified);
});


const getRandomNameButton = document.getElementById('get-name-button');
getRandomNameButton.addEventListener('click', () => {
  const randomNum = Math.floor(Math.random() * nameList.length);

  nameContainer.innerHTML = '';
  nameContainer.textContent = nameList[randomNum];
});

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
  localStorage.removeItem('namesList');
  listContainer.innerHTML = '';
  nameContainer.innerHTML = '';
  nameList.length = 0;
});


window.addEventListener('load', () => {
  names = localStorage.getItem('namesList');
  namesParsed = JSON.parse(names);

  // To prevent errors trying to load a potentially null list
  if (namesParsed != null) {
    nameList = namesParsed;
  };

  displayList();
});
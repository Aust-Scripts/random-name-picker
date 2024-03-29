let nameList = [];
const listContainer = document.getElementById('list');
const nameContainer = document.getElementById('get-name-display');

function saveList() {
  const namesStringified = JSON.stringify(nameList);
  localStorage.setItem('namesList', namesStringified);
}

function displayList() {
  for (let i = nameList.length - 1; i >= 0; i--) {
    const newListItem = document.createElement('li');
    newListItem.textContent = nameList[i];
    newListItem.setAttribute('data-index', i);
    
    newListItem.addEventListener('click', (event) => {
      event.target.remove();
      nameList.splice(i, 1);
      saveList();
    })

    listContainer.appendChild(newListItem);
  };
};

const nameInputForm = document.getElementById('name-form');
nameInputForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name');
  if (name.value === '') return; //Ignores empty names
  nameList.push(name.value);

  listContainer.innerHTML = '';
  name.value = '';

  displayList();
  saveList();
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
  const namesStored = localStorage.getItem('namesList');
  const namesParsed = JSON.parse(namesStored);

  // To prevent errors trying to load a potentially null list
  if (namesParsed != null) {
    nameList = namesParsed;
  };

  displayList();
});
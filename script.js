const list = [];

document.getElementById('name-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name');
  list.push(name.value);
  console.log(list);

  name.value = '';
});


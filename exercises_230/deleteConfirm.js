document.addEventListener('DOMContentLoaded', () => {
  const todo_items = [
    { id: 1, title: 'Homework' },
    { id: 2, title: 'Shopping' },
    { id: 3, title: 'Calling Mom' },
    { id: 4, title: 'Coffee with John '}
  ];

  let todos = document.getElementById('todos');
  let confirmation = document.getElementById('confirmation')
  let selectedTodo;

  todo_items.forEach(item => {
    let li = document.createElement('li');
    let p = document.createElement('p');
    let button = document.createElement('button');

    p.textContent = item.title;
    button.textContent = 'X';
    li.id = item.id;

    li.appendChild(p);
    li.appendChild(button);

    todos.appendChild(li);
  })

  todos.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      selectedTodo = e.target.parentElement.id;
      console.log(selectedTodo);
      confirmation.style.display = 'block';
    }
  })

  confirmation.addEventListener('click', (e) => {
    if (e.target.textContent === 'No') {
      confirmation.style.display = 'none';
    } else if (e.target.textContent === 'Yes') {
      document.getElementById(selectedTodo).remove();
      confirmation.style.display = 'none';
    }
  })
})
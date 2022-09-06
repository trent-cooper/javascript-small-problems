document.addEventListener('DOMContentLoaded', () => {
  const todo_items = [
    { id: 1, title: 'Homework' },
    { id: 2, title: 'Shopping' },
    { id: 3, title: 'Calling Mom' },
    { id: 4, title: 'Coffee with John '}
  ];

  let todos = document.getElementById('todos');
  let menu = document.getElementById('context_menu');
  let confirmation = document.getElementById('confirmation')
  let selectedTodo;

  todo_items.forEach(item => {
    let li = document.createElement('li');

    li.textContent = item.title;
    li.id = item.id;

    todos.appendChild(li);
  })

  todos.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'LI') {
      e.preventDefault();
      selectedTodo = e.target.id;
      menu.style.display = 'block';
      menu.style.top = `${e.clientY}px`;
      menu.style.left = `${e.clientX}px`;
    }
  })

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu_item')) {
      if (e.target.textContent === 'Delete') {
        confirmation.style.display = 'block';
        menu.style.display = 'none';
      }
    } else if (menu.style.display === 'block') {
      console.log('here')
        menu.style.display = 'none';
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
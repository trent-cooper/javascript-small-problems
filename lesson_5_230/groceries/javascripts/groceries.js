document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let list = document.getElementById('grocery-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let itemName = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;

    let li = document.createElement('li');
    li.textContent = `${quantity || '1'} ${itemName}`;
    list.appendChild(li);

    form.reset();
  })
})
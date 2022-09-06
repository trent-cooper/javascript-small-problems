document.querySelector('html').addEventListener('click', () => {
  document.querySelector('#container').style = 'display: none';
});

document.querySelector('#container').addEventListener('click', event => {
  event.stopPropagation();
});


///// Refactor:


document.querySelector('html').addEventListener('click', (e) => {
  if (e.target.id !== 'container') {
    document.querySelector('#container').style = 'display: none';
  }
});
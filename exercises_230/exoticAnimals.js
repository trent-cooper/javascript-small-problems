document.addEventListener('DOMContentLoaded', () => {
  let container = document.getElementById('container');
  let timeoutID;

  container.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'IMG') {
      let caption = e.target.nextElementSibling;
      
      timeoutID = setTimeout(() => {
        caption.style.display = 'block';
      }, 2000);
    }
  });

  container.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'IMG') {
      let caption = e.target.nextElementSibling;
      clearTimeout(timeoutID);
      caption.style.display = 'none';
    }
  })
})
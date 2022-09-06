function walkList(node) {
  if (node.classList.contains('list-group')) {
    console.log(node.firstChild.textContent.trim() + ':');
  } else if (node.classList.contains('list-item')) {
    console.log('  ' + node.firstChild.textContent.trim());
  }

  for (let index = 0; index < node.children.length; index += 1) { 
    walkList(node.children[index]);                      
  }
}
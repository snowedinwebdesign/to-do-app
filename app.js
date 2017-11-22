function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;
    // create a new li (list item)
    let newLi = document.createElement('li');
    // create a new input
    let checkbox = document.createElement('input');
    // create delete input ASSIGNMENT
    let del = document.createElement('input');
    //set the input's type to checkbox
    checkbox.type = "checkbox";
    // set input type to button and value to delete ASSIGNMENT
    del.type = "button";
    del.value = "delete";
    // set the title
    newLi.textContent = title;
    // attach the checkbox to li
    newLi.appendChild(checkbox);
    // attach delete button to the li ASSIGNMENT
    newLi.appendChild(del);
    // attach li to the ul(unordered list)
    toDoList.appendChild(newLi);
    // delete li on click ASSIGNMENT
    del.onclick = function(){
      newLi.remove();
    }
    //empty the input value
    newToDoText.value = '';

  });
}
window.onload = function() {
  onReady();
};

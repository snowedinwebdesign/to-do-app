function onReady(){
  // array of to-dos
  const toDos = [];
  // access HTML form
  const addToDoForm = document.getElementById('addToDoForm');
  //will update our array of to-dos
  function createNewToDo() {
    // access text of each to-dos
    const newToDoText = document.getElementById('newToDoText');
    // prevents empty to-do items
    if (!newToDoText.value) { return; }
    // push new to-dos to array using object literal notation
    toDos.push({
      title: newToDoText.value, // assign value of text input to title
      complete: false
    });
    //clear text input
    newToDoText.value = '';
    // call every time state changes when add new to-do
    renderTheUI();
  }
  function renderTheUI(){
    // access ul
    const toDoList = document.getElementById('toDoList');
    // empty string for newLi
    toDoList.textContent = '';
    // array method called forEach() which takes a function and apply to each item in the array. This will render each to-do as a li in the ul.
    toDos.forEach(function(toDo) {
      // create checkbox
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      // add title text to newLi
      newLi.textContent = toDo.title;
      // update DOM
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }
  // call preventDefault to prevent page from reloading and then call createNewToDo function
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  // will render UI when submited
  renderTheUI();
}
window.onload = function() {
  onReady();
};

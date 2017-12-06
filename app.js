function onReady(){
  let id = 0;
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
      complete: false,
      id: id.value
    });
    id++;
    //clear text input
    newToDoText.value = '';
    // call every time state changes when add new to-do
    renderTheUI();
  }
  // where to put function 
  function removeToDo(tot) {
    toDos = toDos.filter((remove) => remove.id !== tot);
    renderTheUI(toDos);
+    }
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
      const del = document.createElement('input');
      del.type = "button";
      del.value = "delete";
      // add title text to newLi
      newLi.textContent = toDo.title;
      // update DOM
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(del);
 // assignment
      del.addEventListener('click', event => {
        deleteToDo(toDo.id);
        renderTheUI();
      });
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

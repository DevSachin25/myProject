

let todoList = JSON.parse(localStorage.getItem('todoList')) || [];        // Initialize todoList from local storage (if available), or default to empty array
displayItems();         // Display items on page load (now using the loaded data)

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem ,dueDate: todoDate });
    inputElement.value = '';
    dateElement.value = '';

    localStorage.setItem('todoList', JSON.stringify(todoList));    // Save the updated todoList to local storage after adding

    displayItems();

}


function deleteTodo(i){

    todoList.splice(i,1);    //Remove the item at the specified index

    localStorage.setItem('todoList', JSON.stringify(todoList));   //save the updated todoList to local storage after deleting

    displayItems();   //Re-display the list
}


function displayItems(){
    let containerElement = document.querySelector('.todo-container');

    let newHtml = '';
    for(let i = 0; i < todoList.length; i++){

        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;

        let {item,dueDate} = todoList[i];          //desturcturing object

        newHtml += `                        
       
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete'  onclick="deleteTodo(${i});
        displayItems();">Delete</button>
       `;
    }
    containerElement.innerHTML = newHtml;
}
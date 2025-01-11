const form = document.querySelector("form");
const fruitInput = document.querySelector('#fruit-to-add');
const fruitList = document.querySelector('.fruits');

const addEditBtn = () => {
    const allFruits = document.querySelectorAll('.fruit');
    allFruits.forEach(fruit => {
        if (!fruit.querySelector('.edit-btn')) {
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.className = 'edit-btn';
            fruit.appendChild(editBtn);
        }
    })
}

const handleNewFruit = (event) =>{
    event.preventDefault();
    const newFruitName = fruitInput.value.trim();

     if(newFruitName !== ''){
        const newFruit = document.createElement('li');
        newFruit.textContent = newFruitName;
        newFruit.className = 'fruit';


        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'X';
        newFruit.appendChild(deleteBtn);
       
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        newFruit.appendChild(editBtn);

        fruitList.appendChild(newFruit);
        fruitInput.value = '';

     }else{
        alert("please enter a fruit name");
     }
}

const handleDelete =(event)=>{
if(event.target.classList.contains('delete-btn')){
    const liToDelete = event.target.parentElement;
    fruitList.removeChild(liToDelete);
}
}

form.addEventListener('submit',handleNewFruit);
fruitList.addEventListener('click',handleDelete);
addEditBtn();

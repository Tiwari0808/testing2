const form = document.querySelector("form");
const fruitInput = document.querySelector('#fruit-to-add');
const fruitList = document.querySelector('.fruits');

// Adding an "Edit" button dynamically
const addEditBtn = () => {
    const allFruits = document.querySelectorAll('.fruit');
    allFruits.forEach(fruit => {
        if (!fruit.querySelector('.edit-btn')) {
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.className = 'edit-btn';
            fruit.appendChild(editBtn);
        }
    });
};

// Adding another input element inside form dynamically to take description of the fruit
const descInput = document.createElement('input');
descInput.id = 'description';
descInput.type = 'text';
descInput.placeholder = 'Enter description';
const addBtn = document.querySelector('button[type="submit"]');
form.insertBefore(descInput, addBtn);

// Handling new fruit creation
const handleNewFruit = (event) => {
    event.preventDefault();
    const newFruitName = fruitInput.value.trim();
    const fruitDescription = descInput.value.trim();

    if (newFruitName !== '') {
        const newFruit = document.createElement('li');
        newFruit.className = 'fruit';


        const fruitNameSpan = document.createElement('span');
        fruitNameSpan.textContent = newFruitName;
        newFruit.appendChild(fruitNameSpan);


        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = fruitDescription;
        descriptionParagraph.style.fontStyle = 'italic';
        newFruit.appendChild(descriptionParagraph);

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
        descInput.value = '';
    } else {
        alert("Please enter a fruit name.");
    }
};

// Handling delete functionality
const handleDelete = (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const liToDelete = event.target.parentElement;
        fruitList.removeChild(liToDelete);
    }
};

// Filter functionality
const filterInput = document.querySelector('#filter');
const filterFruits = () => {
    const filterText = filterInput.value.trim().toLowerCase();
    const allFruits = document.querySelectorAll('.fruit');

    allFruits.forEach(fruit => {
        const fruitNameSpan = fruit.querySelector('span');
        const fruitDescriptionP = fruit.querySelector('p');

        const fruitName = fruitNameSpan ? fruitNameSpan.textContent.toLowerCase() : '';
        const fruitDescription = fruitDescriptionP ? fruitDescriptionP.textContent.toLowerCase() : '';

        if (fruitName.includes(filterText) || fruitDescription.includes(filterText)) {
            fruit.style.display = '';
        } else {
            fruit.style.display = 'none';
        }
    });
};


filterInput.addEventListener('input', filterFruits);


form.addEventListener('submit', handleNewFruit);


fruitList.addEventListener('click', handleDelete);


addEditBtn();

const filter = document.getElementById("filter");
filter.addEventListener("keyup", function (event) {
    const textEntered = event.target.value.toLowerCase();
    const fruitItems = document.getElementsByClassName("fruit");
    for (let i = 0; i < fruitItems.length; i++) {
        const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
        if (currentFruitText.indexOf(textEntered) === -1) {
            fruitItems[i].style.display = "none";
        } else {
        }
        fruitItems[i].style.display = "flex";
    }
})





const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')


let topicInput = document.querySelector("#topic");
let descInput = document.querySelector("#description");
let dateInput = document.querySelector("#date");
let submitButton = document.querySelector("#submit-btn");
let submitDelete = document.querySelector("#submit-dlt");

let topic = "Başlık Giriniz";
let description = "Açıklama Giriniz";
let date = "Boş";



draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })
    
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
    })
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()

    },{ offset: Number.POSITIVE_INFINITY} )
}

topicInput.addEventListener("change", (e) => {
    topic = e.target.value;
})

descInput.addEventListener("change", (e) => {
    description = e.target.value;
})

dateInput.addEventListener("change", (e) => {
    date = e.target.value;
})

submitButton.addEventListener("click", (e) => {
    const todo = {
        topic,
        description,
        date,
    }
    populateTodos(todo);
})

submitDelete.addEventListener("click", (e) => {
    location.reload();
})

const populateTodos = (todo) => {
    const container = document.querySelector(".container");
    const draggable = document.createElement("p");
    draggable.className = "draggable";
    draggable.setAttribute("draggable", true)
    container.appendChild(draggable)

    const topicP = document.createElement("span");
    const descP = document.createElement("span");
    const dateP = document.createElement("span");

    topicP.innerHTML = todo.topic;
    descP.innerHTML = todo.description;
    dateP.innerHTML = todo.date;

    draggable.appendChild(topicP)
    draggable.appendChild(descP)
    draggable.appendChild(dateP)

    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging")
    })

    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging")
    })
}

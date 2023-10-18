const addText = document.getElementById('addText');
const btm_add = document.getElementById('btm_add');
const btm_del = document.getElementById('btm_del');
const newNote = document.getElementById('textbox');
const btm_remove = document.getElementById('btm_remove');
const btm_completed = document.getElementById('btm_completed');

let common_array = [
    {
        title: 'written by Aibek',
        completed: true,
    },
    {
        title: 'good luck',
        completed: true,
    },
    {
        title: "lets note",
        completed: true,
    }
];

function first_step() {
    newNote.innerHTML = '';
    for (let i = 0; i < common_array.length; i++) {
        newNote.insertAdjacentHTML('beforeend', templateOfnote(common_array[i], i));
    }
}

first_step();

newNote.onclick = function (event) {
    const target = event.target;
    if (target.id === 'btm_remove') {
        const index = target.dataset.index;
        common_array.splice(index, 1);
        first_step();
    } else if (target.id === 'btm_completed') {
        const index = target.dataset.index;
        common_array[index].completed = !common_array[index].completed;
        first_step();
    }
};

btm_add.onclick = function () {
    if (addText.value.length === 0) {
        return;
    }
    const getNote = {
        title: addText.value,
        completed: false
    };
    common_array.push(getNote);
    first_step();
    addText.value = "";
};

btm_del.onclick = function () {
    common_array = [];
    newNote.innerHTML = "";
};

function templateOfnote(note, index) {
    return `<li class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}
   <div><button id="btm_remove" data-index="${index}">X</button>
   <button id="btm_completed" class="${note.completed ? 'warning' : 'success'}" data-index="${index}">V</button></div>
   </li>`;
}




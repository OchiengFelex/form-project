document.addEventListener('DOMContentLoaded', function() { 
    const list = document.querySelector('#nameform');
    const forms = document.forms;

    list.addEventListener('click', (e) => {
        if (e.target.className == 'input') {
            const form = e.target.parentElement;
            form.parentNode.removeChild(input);
        }
    });
    const addForm = forms['form'];
    addForm.addEventListener('submit', function(e) { 
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        const form = document.createElement('form');
        const nameform = document.createElement('input');
        const deleteBtn = document.createElement('input');
// const gjavascript = document.querySelector('#reading-list li:nth-child(1) .name');
// console.log(gjavascript);
// gjavascript.innerHTML = 'test change words';


// const readingList = document.querySelectorAll('#reading-list li .name');
// const liName = document.querySelectorAll('#reading-list li .name');
// readingList.forEach(function(list, index) {
    
//     list.textContent = ' Book Title: ' + liName[index].textContent;
// })




// const readingList = document.querySelectorAll('#reading-list li .name');

// readingList.forEach(function(list) {
    
//     list.textContent = `Book title: ${list.textContent} `;
// })


const addBtn = document.querySelector('#add-list button');
const addText = document.querySelector('#add-list input');
const readingListUl = document.querySelector('#reading-list ul');

addBtn.addEventListener('click', (e) =>{
    let newList = document.createElement('li');
    
    let newName = document.createElement('span');
    newName.className = 'name';
    newName.innerHTML = addText.value;

    let newDelete = document.createElement('span');
    newDelete.className = 'delete';
    newDelete.innerHTML = 'delete';

    newList.appendChild(newName);
    newList.appendChild(newDelete);

    readingListUl.appendChild(newList);    
    addText.value = '';
    e.preventDefault();
});


const list = document.querySelector('#reading-list ul');
list.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentNode;
        list.removeChild(li);
    }
})





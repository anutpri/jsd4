const btnAdd = document.querySelector('.btn-add');

btnAdd.addEventListener('click', function () {
  const input = document.querySelector('input');
  const newValue = input.value;
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = newValue;

  const btnEdit = document.createElement('button');
  btnEdit.className = 'btn-edit';
  btnEdit.innerHTML = 'Edit'; // <button class="btn-edit">Edit</button>
  btnEdit.addEventListener('click', function () {
    const newValue = prompt('Enter new text');
    const span = this.previousElementSibling;
    span.innerHTML = newValue;
  });

  const btnDel = document.createElement('button');
  btnDel.className = 'btn-del';
  btnDel.innerHTML = 'Del'; // <button class="btn-del">Del</button>
  btnDel.addEventListener('click', function () {
    console.log('Del');
    const li = this.parentElement;
    li.remove();
  });

  li.append(span); // <li><span>${newValue}</span></li>
  li.append(btnEdit); // <li><span>${newValue}</span><button class="btn-edit">Edit</button></li>
  li.append(btnDel);

  ul.append(li);
  input.value = '';

  // const html = `<li>
  //                 <span>${newValue}</span>
  //                 <button class="btn-edit">Edit</button>
  //                 <button class="btn-del">Del</button>
  //               </li>`;
  // ul.insertAdjacentHTML('beforeend', html);
});

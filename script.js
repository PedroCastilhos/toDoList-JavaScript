let input = document.querySelector('#toDo');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.querySelector('#li');

btn.addEventListener('click', function () {
  let txt = input.value;
  if (txt === '') {
    alert('Escreva alguma coisa.');
  } else {
    let li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    input.value = '';
  }
});

list.addEventListener('click', function (e) {
  if (e.target.tagName == 'LI') {
    e.target.classList.toggle('checked');
  }
});


const addBtn = document.querySelector('#add');
const searchBtn = document.querySelector('#search');
const ul = document.querySelector('.todos');
const insideLi = ul.getElementsByTagName('li')
const showResult = document.getElementById('show');
const span = document.querySelectorAll('.delete');
const h = document.getElementById('info');

let index = 0;

addBtn.addEventListener('click', function () {
    let addText = document.querySelector('#task').value.trim();
    if (addText === "") {
        alert("Please enter to do....");
    } else {
        let li = document.createElement('li');


        li.className = 'todo_list';

        li.innerHTML = `${++index}. ${addText}`;

        let icon = document.createElement('span');
        icon.className = 'delete material-icons';
        icon.innerHTML = 'delete_outline';
        li.appendChild(icon);

        h.style.display = 'none'
        ul.appendChild(li);
        deleteElement(icon);

    }
    showResult.style.display = 'inline-block'
    setTimeout(function () {
        showResult.style.display = 'none';
    }, 1500)


});

function deleteElement(element) {
    element.addEventListener('click', function (event) {

        const li = event.target.parentNode
        event.stopPropagation();
        if (insideLi.length === 1) {
            h.style.display = 'block';
            li.remove();

        }
        else if (insideLi.length > 1) {
            li.remove();

        }

        // let indexNum = parseInt(li.innerText.split(".")[0])-1;


        // for (let i = indexNum; i < insideLi.length; i++) {

        //     let receiveIndex = insideLi[i];
        //     let newIndex=parseInt(receiveIndex.innerText.split("."[0])) -1;
        //     receiveIndex.innerText=`${newIndex}. ${receiveIndex.innerText.split(".")[1]}`

        // }

    })
}

searchBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    let input = document.querySelector('#filter').value;
    for (let i = 0; i < insideLi.length; i++) {
        let todoText = insideLi[i].innerText;
        if (todoText.indexOf(input) != -1) {
            insideLi[i].style.display = 'flex';
           
        }
        else {
            insideLi[i].style.display = 'none';
           
        }

    }




})







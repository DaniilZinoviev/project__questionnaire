// Global variables
let textBlock = document.getElementsByClassName('main-text')[0];
let buttons = document.getElementsByClassName('buttons')[0];
let id = 0;

buttons.addEventListener('click', (e) => step(e));

function step(event) {
    if (event.target.tagName != 'BUTTON') return;
    let btnChoise = event.target.getAttribute('data-choose');

    // Change current data-object
    id = data[id].options[btnChoise - 1].moveTo;

    if (!data[id].result) {
        // if "result" doesn't is
        // Change text 
        textBlock.textContent = data[id].question;

        // Change button's texts
        for (let i = 0; i < buttons.children.length; i++) {
            buttons.children[i].textContent = data[id].options[i].choise;
            buttons.children[i].setAttribute('data-choose', data[id].options[i].moveTo);
        }
    } else {
        // if "result" is
        buttons.innerHTML = '';

        textBlock.textContent = data[id].result;
    }

    
}
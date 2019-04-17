// Global variables
let textBlock = document.getElementsByClassName('main-text')[0];
let buttons = document.getElementsByClassName('buttons')[0];

buttons.addEventListener('click', (e) => handleClick(e));

function handleClick(e) {
    if (event.target.tagName != 'BUTTON') return;
    let btnChoise = event.target.getAttribute('data-choose');

    step(btnChoise);
}

function step(int) {
    if (data[int].result) {
        // Show answer
        buttons.innerHTML = '';
        textBlock.innerHTML = `Вам больше всего подходит: <b>${data[int].result}</b>!`;
        
        // experimental: Add refresh button
        let reloadButton = document.createElement('button');
        reloadButton.className = 'btn btn-reload';
        reloadButton.textContent = 'Обновить';
        reloadButton.onclick = function() {
            window.location.reload();
        }
        buttons.appendChild(reloadButton);
        return;
    }    

    // Change text 
    textBlock.textContent = data[int].question;

    // Render data options via buttons
    renderButtons(data[int]);
}

function renderButtons(currentDataObject) {
    buttons.innerHTML = "";
    for (let i = 0; i < currentDataObject.options.length; i++) {
        let newButton = document.createElement('button');
        newButton.className = 'btn';
        newButton.textContent = currentDataObject.options[i].userChoice;
        newButton.setAttribute('data-choose', currentDataObject.options[i].moveTo);
        buttons.appendChild(newButton);
    }
}

// Initial Rendering
step(0);
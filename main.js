let decimal = false;

//add event listener to all keypads
const buttons = document.querySelectorAll('.keypads > div');
//console.log(buttons);

buttons.forEach(button => {
    button.addEventListener('click', processValue);
});

//chooses function run after keypad is pressed
function processValue(e) {
    const value = e.target.innerText;
    console.log(value + ' ' + e.target.className);

    if(e.target.className == 'number') {
        addToScreen(value);
    } else if(e.target.className == 'clear') {
        clear();
    } else if(e.target.innerText  == 'POWER') {
        powerOn();
    }
}

//adds input to screen
function addToScreen(value) {
    const screen = document.querySelector('.screen');
    const numb = screen.innerText;

    console.log(decimal);

    if(numb.length > 10) {
        alert('Your number is as big as it can get');
        return;
    }
    if(decimal && value == '.')
        return;

    screen.innerText += value;
    
    if(value == '.') {
        decimal = true;
    }
}

function powerOn() {
    const screen = document.querySelector('.scree');
    
    if(screen.innerText == 'TOGGLE POWER') {
        screen.innerText = '';
    } else {
        screen.innerText = 'TOGGLE POWER';
    }
}

function add() {

}

function subt() {

}

function mult() {

}

function div() {

}

function enter() {

}

function clear() {
    const screen = document.querySelector('.screen');
    screen.innerText = '';
}
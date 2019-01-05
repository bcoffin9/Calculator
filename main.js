let decimal = false;
let screen = document.querySelector('.screen');
let numb = screen.innerText;
let total = '';
let operator = ''

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

    if (e.target.className == 'number') {
        addToScreen(value);

    } else if (e.target.className == 'clear') {
        clear();

    } else if (e.target.innerText == 'POWER') {
        powerOn(); //turn the power on or off

    } else if (e.target.id == 'add') {
        addContext();

    } else if (e.target.id == 'enter') {
        enter();

    } else if (e.target.id == 'subt') {
        subtContext();

    } else if (e.target.id == 'mult') {
        multContext();

    } else if (e.target.id == 'div') {
        divContext();
    }
}

//adds input to screen
function addToScreen(value) {

    if (numb == 'TOGGLE POWER') {
        return alert('Please turn on the device human');
    }
    if (numb.length > 10) {
        alert('Your number is as big as it can get');
        return;
    }
    console.log(decimal);
    if (decimal && value == '.')
        return;

    numb += value;
    screen.innerText = numb;

    if (value == '.') {
        decimal = true;
    }
}

function powerOn() {

    if (numb == 'TOGGLE POWER') {
        numb = '';
        screen.innerText = numb;
    } else {
        numb = 'TOGGLE POWER';
        total = '';
        operator = '';
        decimal = false;
        screen.innerText = numb;
    }

}

function addContext() {
    total = numb;
    numb = '';
    decimal = false;
    screen.innerText = numb;
    operator = 'add';
}

function add(value) {
    numb = +value + +total;
    numb = checkSize(numb, 4);
    screen.innerText = numb;
}

function subtContext() {
    total = numb;
    numb = '';
    decimal = false;
    screen.innerText = numb;
    operator = 'subt';
}

function subt(value) {
    numb = total - value;
    numb = checkSize(numb, 4);
    screen.innerText = numb;

}

function multContext() {
    total = numb;
    numb = '';
    decimal = false;
    screen.innerText = numb;
    operator = 'mult';
}

function mult(value) {
    numb = total * value;
    numb = checkSize(numb, 4);
    screen.innerText = numb;
}

function divContext() {
    total = numb;
    numb = '';
    decimal = false;
    screen.innerText = numb;
    operator = 'div';
}

function div(value) {
    if (value == 0)
        return alert('Nice try! But you cannot divide by 0')
    numb = total / value;
    numb = checkSize(numb, 4);
    screen.innerText = numb;
}

function checkSize(value, limit) {

    console.log('Total: ' + total);
    console.log('Number: ' + numb);
    stringRep = value.toString();
    if (stringRep.length < 9) {
        return value;
    } else {
        let size = stringRep.length;
        let dot = stringRep.indexOf('.');
        console.log('Dot: ' + dot);

        if (dot < 0) {
            if (value > 0) {
                value /= Math.pow(10, (size - 1));
                value = value.toFixed(limit);
                return value += 'e' + (size - 1);
            } else {
                value /= Math.pow(10, (size-2));
                value = value.toFixed(limit);
                return value += 'e' + (size - 2);
            }

        } else {
            if (dot > 1) {
                value /= Math.pow(10, (dot - 1));
                value = value.toFixed(limit);
                return value += 'e' + (size - 1);

            } else if (value >= 1 || value <= -1) {
                return value.toFixed(limit);

            } else {
                let firstNumb = '';
                let decimalPart = stringRep.slice(dot + 1);
                const smallNumb = [...decimalPart];
                console.log(smallNumb);
                if (smallNumb[0] != '-') {
                    for (let i = 0; i < smallNumb.length; i++) {

                        if (smallNumb[i] > 0) {
                            firstNumb = smallNumb[i];
                            continue;
                        }
                    }

                } else {
                    for (let i = 0; i < smallNumb.length; i++) {

                        if (smallNumb[i] > 0) {
                            firstNumb = smallNumb[i];
                            continue;
                        }
                    }
                }

                value *= Math.pow(10, (firstNumb + 1));
                value = value.toFixed(limit);
                return value += 'e-' + (firstNumb + 1);
            }
        }
    }
}

function enter() {
    if (operator == 'add') {
        add(numb);

    } else if (operator == 'subt') {
        subt(numb);

    } else if (operator == 'mult') {
        mult(numb);

    } else if (operator == 'div') {
        div(numb);
    }
}

function clear() {
    const screen = document.querySelector('.screen');
    numb = '';
    decimal = false;
    total = '';
    screen.innerText = numb;
}
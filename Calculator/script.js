let display = document.getElementById('display');

function inputValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}
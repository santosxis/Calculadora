const input = document.querySelector('#inputText')

const calculate = (number) => {
    input.value += number;
}

const equal = () => {
    try {
        input.value = eval(input.value);
    }
    catch(err) {
        alert('você inseriu a entrada inválida')
    }
} 

const clr = () => {
    input.value = "";
}

const del = () => {
    input.value = input.value.slice(0, -1);
}
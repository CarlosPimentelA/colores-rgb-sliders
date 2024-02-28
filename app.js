const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');
const valorRojo = document.getElementById('valor-rojo');
const valorVerde = document.getElementById('valor-verde');
const valorAzul = document.getElementById('valor-azul');
const body = document.body;

inputRojo.addEventListener('mousemove', () => {
    valoresInput()
    cambiarColor()
});

inputRojo.addEventListener('mousedown', () => {
    valoresInput()
    cambiarColor()
});

inputVerde.addEventListener('mousemove', () => {
    valoresInput()
    cambiarColor()
})

inputVerde.addEventListener('mousedown', () => {
    valoresInput()
    cambiarColor()
})

inputAzul.addEventListener('mousemove', () => {
    valoresInput()  
    cambiarColor()
})

inputAzul.addEventListener('mousedown', () => {
    valoresInput()  
    cambiarColor()
})

function valoresInput() {
    valorRojo.innerHTML = inputRojo.value;
    valorVerde.innerHTML = inputVerde.value;
    valorAzul.innerHTML = inputAzul.value;
}

function cambiarColor() {
    body.style.backgroundColor = `rgb(${inputRojo.value}, ${inputVerde.value}, ${inputAzul.value})`
}

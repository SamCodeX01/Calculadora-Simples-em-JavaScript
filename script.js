function somar(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var soma = n1 + n2;
    if (isNaN(n1) & isNaN(n2)) {
        alert("Digite um número válido!")
    } 
    let resultado = document.getElementById("resultado");
    resultado.value = soma;
}

function subtrair(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var sub = n1 - n2;
    if (isNaN(n1) & isNaN(n2)) {
        alert("Digite um número válido!")
    } 
    resultado = document.getElementById("resultado");
    resultado.value = sub;
}
function multiplicar(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    mult = n1 * n2;
    if (isNaN(n1) & isNaN(n2)) {
        alert("Digite um número válido!")
    }
    resultado = document.getElementById("resultado");
    resultado.value = mult;
}
function dividir(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var dividir = n1 / n2;
    var resultado = document.getElementById("resultado");
    resultado.value = dividir;
    if (isNaN(n1) & isNaN(n2)) {
    alert("Digite um número válido!")
    } 
}

function limpar(){
    var n1 = document.getElementById("n1").value = " ";
    var n2 = document.getElementById("n2").value = " ";
    var resultado = document.getElementById("resultado").value = " "
}


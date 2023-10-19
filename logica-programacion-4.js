/*function filtro(n){
    if(n == NaN){
        return "No es un número, inténtalo de nuevo";
    }
    function fibonacci(n){
        let acumulador
    }
}*/

console.log(listaFibbonacci);
let num = prompt("Ingresa la cantidad de numeros que quiere de la serie de fibbonacci: ")
var listaFibbonacci = [0, 1];
for(var i = 2; i <= num - 1 ; i++){
    resultado = listaFibbonacci[i - 1] + listaFibbonacci[i - 2];
    listaFibbonacci.push(resultado);
}
console.log(listaFibbonacci);

const resultadoDiv = document.getElementById("fibonacci-result");

resultadoDiv.textContent = "Las cifras de la serie Fibonacci para el número que ingresaste son: " + listaFibbonacci.join(", ");
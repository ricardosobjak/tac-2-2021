// Array
var numeros = [12, 334, 5, 6, 7, 3, 745, 3, 456, 5, 4456];
for (var i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
// CallBack function
var quadrado = function (valor) {
    console.log(Math.pow(valor, 2));
};
numeros.forEach(quadrado);
numeros.forEach(function (e) { return console.log(" - ", e); });

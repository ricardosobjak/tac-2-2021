// Array
const numeros: number[] = [12, 334, 5, 6, 7, 3, 745, 3, 456, 5, 4456];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// CallBack function
const quadrado = function (valor) {
  console.log(Math.pow(valor, 2));
};

numeros.forEach(quadrado);



numeros.forEach( e => console.log(" - ", e));


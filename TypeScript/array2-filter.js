var pessoas = [
    { nome: 'Juca', idade: 30 },
    { nome: 'Marcela', idade: 15 },
    { nome: 'Joana', idade: 51 },
    { nome: 'Carlos', idade: 18 },
    { nome: 'Jurema', idade: 35 },
    { nome: 'Poliana', idade: 10 },
];
/**
 * Filtrando Array
 */
function cb(e) {
    return e.idade >= 18;
}
var filtrado1 = pessoas.filter(cb);
console.log(filtrado1);
// -------------------
var filtrado2 = pessoas.filter(function (e) { return e.idade >= 18; });
console.log(filtrado2);
/**
 * Transformando um Array (map)
 */
console.log('TRANSFORMAÇÃO DE ARRAYS');
function cbMap(e) {
    return e.idade;
}
var idades = pessoas.map(function (e) { return e.idade; });
console.log(idades);
/**
 * REDUÇÃO DO ARRAY (reduce)
 */
console.log("REDUÇÃO DO ARRAY");
var somaDasIdades = pessoas
    .map(function (e) { return e.idade; }) // Mapeamento de Pessoa[] -> number[]
    .reduce(function (acumulado, atual) { return acumulado + atual; }, 0);
console.log(somaDasIdades);
pessoas.push({ nome: "Bia", idade: 14 });
console.log(idades.join(','));

interface Pessoa {
  nome: string;
  idade: number;
}

const pessoas: Pessoa[] = [
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
function cb(e: Pessoa): boolean {
  return e.idade >= 18;
}
const filtrado1 = pessoas.filter(cb);
console.log(filtrado1);

// -------------------
const filtrado2 = pessoas.filter((e) => e.idade >= 18);
console.log(filtrado2);

/**
 * Transformando um Array (map)
 */
console.log('TRANSFORMAÇÃO DE ARRAYS')

function cbMap(e: Pessoa): number {
  return e.idade;
}

const idades: number[] = pessoas.map(e => e.idade);
console.log(idades);


/**
 * REDUÇÃO DO ARRAY (reduce)
 */
console.log("REDUÇÃO DO ARRAY")

const somaDasIdades: number = pessoas
  .map(e => e.idade) // Mapeamento de Pessoa[] -> number[]
  .reduce( (acumulado, atual) => acumulado + atual, 0);

console.log(somaDasIdades);

pessoas.push({ nome: "Bia", idade: 14 });
console.log(idades.join(','));
// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');

priceNumber('R$ 99,99');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
const fruta = 'Laranja';

(() => {
  const fruta = 'Maçã';
  console.log(fruta);
})();
console.log(fruta);

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();


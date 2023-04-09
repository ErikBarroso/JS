

//Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
//Math.floor(Math.random() * (max - min + 1)) + min;

// Retorne um número aleatório
// entre 1050 e 2000

let aleatorio2 = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;

//console.log(aleatorio2);

// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];


function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);
return preco;
}
let soma = 0;
listaPrecos.forEach((preco)=>{
  soma +=limparPreco(preco);
})
console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

limparPreco(listaPrecos[1]);
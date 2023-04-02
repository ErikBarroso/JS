/*function areaQuadrado(lado) {
  return lado*lado;
}
console.log(areaQuadrado(2));*/


/*function pi() {
  return 3.14;
}
let total = 5* pi();
console.log(pi());*/

/*function imc (peso, altura){
  const imc = peso / (altura **2);
  return imc;
}
console.log(imc(80, 1.8));*/

/*function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto de praia';
  } else if (cor === 'verde'){
    return 'Eu gosto de trilha';
  } else {
    return 'Eu não gosto de nada.k kk'
  }
}*/

/*addEventListener('click', function(){console.log('oi');
});*/

/*function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
  return imc;
}

imc(80, 1.80); // retorna o imc
console.log(imc(180, 1.80)); // retorna o imc e undefined*/

/*function teceriraIdade(idade) {
  console.log(typeof idade);
  if(typeof idade !== 'number'){
    return 'Digite sua idade';
  } else if(idade >= 60){
    return 'é da terceira idade';
  } else {
    return 'não é da terceira idade';
  }
}

console.log(teceriraIdade('0'));*/
/*let totalPaises = 193;
function faltaVisitar(paisesVisitados) {  
  return `Falta visitar ${totalPaises - paisesVisitados} paises`
}*/
/*let profissao = 'Programador';
function dados(){
  let nome = 'Erik';
  let idade = 28;
  function outrosDados() {
    let endereco = 'Bahia';
    let idade = 26;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  } 
  return outrosDados();
  } 
  
  console.log(dados());*/

  /*imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}*/



// Crie uma função para verificar se um valor é Truthy

function verdadeiro(numero){
  return !!numero;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lados){
  return lados*4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  nomeCompleto = nome + sobrenome;
  return nomeCompleto;
}
// Crie uma função que verifica se um número é par

function numeroPar(numero) {
  if(numero % 2 === 0){
    console.log('É par');
  } else {
    console.log('Não é');
  }
  
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado){
  return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function() {
  console.log('Erik Barroso Santos');
});

//Corrija o erro abaixo
/*var totalPaises = 193;
function precisoVisitar(paisesVisitados) {

  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
var bg = menu.backgroundColor;*/

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
/*let dadosPessoais = {
  nome: 'Erik',
  sobrenome: 'Barroso',
  nomeCompleto: function(){
    return this.nome  + ' ' + this.sobrenome;
  },
}*/


// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
/*var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
;*/

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

/*let cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  late(pessoa) {
    if(pessoa === 'homem'){
    return 'Cachorro latindo';
    }else{
      return 'Cachorro não está latindo'
    }
  }
} */



// nomeie 3 propriedades ou métodos de strings
/*let nome23 = 'Erik';
nome23.
includes
concat
indexOf*/
// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
//addEventListener
//after
//appendChild
//getAttribute
//dispatchEvent

// busque na web um objeto (método) capaz de interagir com o clipboard, 


// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

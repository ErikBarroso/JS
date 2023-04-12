/*const carro = {
  marca: 'Ford',
  ano: 2018
}

function descricaoCarro(velocidade) {
  console.log(this.marca + ' ' + this.ano +' ' + velocidade);
}

descricaoCarro.call(carro, 100)



function darOi(nome, idade){
  console.log('Oi' + ' ' +  nome + ' ' + idade);
}

darOi.call({}, 'Erik', 26)



function Dom(seletor) {
  this.element = document.querySelector(seletor);
}
Dom.prototype.ativo = function(classe){
  this.element.classList.add(classe)
}

const ul = new Dom('ul');

ul.ativo('ClasseAtivar')

console.log(ul);


const li = {
  element: document.querySelector('li')
}
Dom.prototype.ativo.call(li, 'ativar');
*/


// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos,(acumulador, item) => {
  
  return acumulador + item.innerText.length
},0)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo){
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;

}
//console.log(criarElemento('li', 'azul', 'Olá !'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null,'h1', 'titulo')


console.log(h1Titulo('Erik'));
console.log(h1Titulo('Helen'));

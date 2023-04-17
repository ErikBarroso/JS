/*const doc = fetch('./doc.txt');

doc.then(resolucao => {
  console.log(resolucao);
})

fetch('./doc.txt').then(function(response) {
  console.log(response); // Response HTTP (Objeto)
});
 

fetch('./arquivo.txt').then(function(response) {
  return response.text().then((corpo)=>{
  const conteudo3 = document.querySelector('.conteudo');
  conteudo3.innerText = corpo;
})
});

const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  console.log(response.status, response.ok);
  if(response.status === 404) {
    console.log('Página não encontrada')
  }
});
*/


// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btncep');
const resultadoCep = document.querySelector('.resultadoCep');



btnCep.addEventListener('click', handleClick);
function handleClick(event){
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}
function buscaCep(cep){
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(body => {
    resultadoCep.innerText = body;
  })
}




// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btnDisplay = document.querySelector('.btc')
function fetchBtc(){
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson =>{
    btnDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
  })
}
//setInterval(fetchBtc, 1000 * 30);

fetchBtc();
// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');

function puxarPiada(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(piada =>{
    paragrafoPiada.innerText = piada.value;
  })
}

btnProxima.addEventListener ('click', puxarPiada)




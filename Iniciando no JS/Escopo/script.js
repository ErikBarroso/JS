for (let i = 0; i < 10; i++){
  //console.log([i]); 
}

const data = {
  ano: 2023,
  mes: 'Abril',
}

let ano;
ano = 2018
++ano;
//console.log(ano);


// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
//console.log(cor, marca, portas);
//Pq as variáveis const e let n podem ser acessadas fora do bloco.

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);



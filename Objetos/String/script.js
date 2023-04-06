const comida = "Pizza";
//console.log(comida.length);

/*const frase = "A melhor comida";
console.log(frase[frase.length-1]);
console.log(frase[0]);

console.log(frase.charAt(0));*/

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseFinal = frase + linguagem ;
const fraseFinal2 = frase.concat(linguagem, '!!!') ;

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

//console.log(listaFrutas.includes(fruta));

//console.log(fruta.endsWith('nana'));


// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },   
]
let taxaTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$ ', '');
  if (item.descricao.slice(0,4) === 'Taxa') {
    taxaTotal = taxaTotal + numeroLimpo
  }
})
//console.log(taxaTotal);


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayItens = transportes.split(';');
//console.log(arrayItens);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split('span').join('a'); // como virou um array, posso usar join
//console.log(html);


// Retorne o último caracter da frase
const frase2 = 'Melhor do ano!';

//console.log(frase2[frase2.length-1]);


// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let taxasTotal = 0
transacoes2.forEach((item) => { 
  item = item.toLowerCase(); //minuscula
  item = item.trim(); // tirando espaço
  item = item.slice(0,4);
if(item === 'taxa'){
  taxasTotal++
}
})
console.log(taxasTotal);



/*const numeros = [10, 25, 63, 5, 35, 10];

const maiorNumero = numeros.reduce((numeroAnterior, numeroAtual)=>{
  if(numeroAnterior > numeroAtual){
    return numeroAnterior;
  } else{
    return numeroAtual;
  }
})

const maiorNumero2 = numeros.reduce((numeroAnterior, numeroAtual)=> numeroAnterior > numeroAtual ? numeroAnterior : numeroAtual
)

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {})



const frutas = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((fruta,indice) => {
  if(fruta === 'Uva'){
    //console.log(indice); 
  }
  //return fruta === 'Uva' + indice;
}); // true

function maiorQue100(numero) {
  return numero > 100;
}
const numeros3 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros.some(maiorQue100); // true


const frutas2 = ['', '', 'Banana', 'Pêra', 'Uva'];

const indexBanana = frutas2.find(nomedaFruta => {
  return nomedaFruta;
})

const numeros5 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros5.filter(x => x > 45);
console.log(buscaMaior45);


const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulasMaiores = aulas.filter((aula) => { 
  return aula.min > 15;
});
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]
*/

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const obejetosCurso = arrayCursos.map((curso) =>{
  const tituloCurso = curso.querySelector('h1').innerText;
  const descricaoCurso = curso.querySelector('p').innerText;
  const aulasCurso = curso.querySelector('.aulas').innerText;
  const horasCurso = curso.querySelector('.horas').innerText;
 
  return{
    tituloCurso,
     descricaoCurso,
     aulasCurso,
    horasCurso,
  }
})


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maior = numeros.filter(n => n > 100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const verificandoBaixo = instrumentos.some((instrumento) => {
  return instrumento ==='Baixo';
})

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco:  'R$ 10,60',
  },
  {
    
    preco: 'R$ 50,00'
  }
]
// Retorne o valor total das compras
const valorTototal = compras.reduce((acumulador,item) => {
  const precoLimpo = +item.preco.replace('R$ ', '',).replace(',', '.');
  return acumulador + precoLimpo;   
},0)

console.log(valorTototal);


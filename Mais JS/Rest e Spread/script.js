/*function perimetroForma(lado, totalLados = 2) {
  return lado * totalLados;
}

perimetroForma(10, 5); // 50
perimetroForma(10); // 40

function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou.')
  });
}

anunciarGanhadores('Pedro', 'Marta', 'Maria');
,

function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou um ' + premio)
  });
}

anunciarGanhadores('Notebook', 'Pedro', 'Marta', 'Maria');


const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];*/

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6

/*function createButton(background, color) {
  background = background || 'blue';
  if(color === undefined) {
    color = 'red';
  }
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  return buttonElement;
} 

const redButton = createButton();

function createButton(background = 'blue', color = 'red'){
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;

}

const redButton = createButton();
*/

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas)





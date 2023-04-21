/*const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

for(const fruta of frutas) {
  console.log(fruta);
}

for(const char of frase) {
  console.log(char);
}


const frutas = ['Banana', 'Morango', 'Uva'];

for(const index in frutas) {
  console.log(index);
}

for(const index in frutas) {
  console.log(frutas[index]);
}
*/


// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const itens = document.querySelectorAll('li');

for (const listas of itens) {
  listas.classList.add('teste')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window


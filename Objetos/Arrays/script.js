/*const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];


const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1] // Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; // 11
console.log(carros);

const li =document.querySelectorAll('li');
const arrayLi = Array.from(li);

const carros = {
  0: 'Fiat',
  1: 'Honda' ,
  length: 2,
}

const carrosArray = Array.from(carros);


console.log(li);
console.log(arrayLi);


const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 4
frutas[2].length; // 2


const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();
instrumentos; // ['Baixo', 'Guitarra', Violão]

const idades = [32,21,33,43,1,12,8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]

console.log(instrumentos);


const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros.push('Ferrari'); // 6
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(carros.splice(1, 0, 'Kia', 'Mustang')); // []
carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

console.log(carros.splice(2, 2, 'Ferrari')); // ['Fiat', 'VW']
carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']
*/

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável

const primeiraComida = comidas.shift();

// Remova o último valor de comidas e coloque em uma variável

const ultimaComida = comidas.pop();

// Adicione 'Arroz' ao final da array

comidas.push('Arroz');

// Adicione 'Peixe' e 'Batata' ao início da array

comidas.unshift('Peixe', "Batata");

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética

estudantes.sort();

// Inverta a ordem dos estudantes
estudantes.reverse();
// Verifique se Joana faz parte dos estudantes
//console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
//console.log(estudantes.includes('Juliana'));

let html = ` <section>
              <div>Sobre</div>
               <div>Produtos</div>
               <div>Contato</div>
             </section>
            `
            
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join("li");

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const cloneCarros = carros.slice();
carros.pop();


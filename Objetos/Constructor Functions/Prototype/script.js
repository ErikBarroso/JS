function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade= idade;
}

const andre = new Pessoa('Andre', 28);

Pessoa.prototype.andar = function(){
  return this.nome + ' Pessoa andou';
}

//console.log(Pessoa.prototype);

const listaAnimais = ['Cachorro', 'Gato', 'Leão']

const lista = document.querySelectorAll('li');

const listaArray2 = Array.from(lista);

const Carro ={
  marca: 'Ford',
  preco: 2000,
  andar() {
    return 'oi';
  }
}



// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nomePessoa,sobrenomePessoa, idadePessoa){
  this.nome = nomePessoa;
  this.sobrenome = sobrenomePessoa;
  this.idade = idadePessoa;
}

const pessoa1 = new Pessoa('Erik' , 'Barroso', 26);

Pessoa.prototype.nomecompleto = function(){
  return `${this.nome} ${this.sobrenome}`;
}


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLAllCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)




// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;  //'HTMLLIElement'
li.click; //function
li.innerText; //String
li.value; // number
li.hidden; // bollean
li.offsetLeft; // numbber
li.click(); // underfined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // string

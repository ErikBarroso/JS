/*function Carro(marcaAtribuida, precoAtribuido){
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat' , 10);*/



/*function Carro2(marca, precoInicial){
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const celta = new Carro2('Celta', 5000)*/

/*const Dom = {
  seletor: 'li',
  element(){
    return document.querySelector(this.seletor);
  },
  ativar(){   
      this.element().classList.add('Ativar');
  }
}*/

/*function Dom(seletor) {
  this.element = function(){
    return document.querySelector(seletor);
  }
  this.ativar = function(classe){   
      this.element().classList.add(classe);
  }
}

const li = new Dom('li');
const ul = new Dom('ul');*/

// Transforme o objeto abaixo em uma Constructor Function
/*function Pessoa(nomePessoa, idadePessoa) {
  this.nome = nomePessoa;
  this.idade = idadePessoa;
  this.andar = function(){
    console.log(this.nome + ' andou');
  }
}*/

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

//const João = new Pessoa('João', 20);
//const Maria = new Pessoa('Maria', 25);
//const Bruno = new Pessoa('Bruno', 15);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function(classe){
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  }
  this.removeClass = function(classe){
    elementList.forEach((element) => {
      element.classList.remove(classe);
    })
  }
}
const listaItens = new Dom('li');
const ul= new Dom('ul');


/*function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  //console.log(elementList);
}
const listaItens = new Dom('li');*/

/*const carro = {
  rodas: 4,
  init(marcoCarro) {
    this.marca = marcoCarro;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro).init('Honda');

const ferrari = Object.create(carro).init('ferrari'); 

const moto = {}
Object.defineProperties(moto, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})

moto.velocidade = 200;
moto.velocidade;
// Velocidade 200

*/

// Crie uma função que verifique
// corretamente o tipo de dado

function verificarDados(dado) {
  return Object.prototype.toString.call(dado)
   
}

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {
 lado: 3,
}
Object.defineProperties(quadrado,{
  lado: {
    valor: 3,
    configurable: true,
    enumarable: false,
   
  }
})
quadrado.lado = 5

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao); // s

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

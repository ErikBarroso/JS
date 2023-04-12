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

const ferrari = Object.create(carro).init('ferrari'); */

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
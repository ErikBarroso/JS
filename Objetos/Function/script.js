const carro = {
  marca: 'Ford',
  ano: 2018
}

function descricaoCarro(velocidade) {
  console.log(this.marca + ' ' + this.ano +' ' + velocidade);
}

descricaoCarro.call(carro, 100)
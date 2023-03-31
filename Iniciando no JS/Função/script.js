let pessoa = {
  nome: 'Erik',
  idade: 26,

}

let quadrado = {
  lados: 4,
  area(lado){ // método
    return lado * lado;
  }, 
  perimetro(lado) {
    return this.lados*lado;
  }
}
console.log(quadrado.area(3));
console.log(quadrado.perimetro(10)); 

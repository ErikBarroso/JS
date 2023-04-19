/*const button = {
  get tamanho(){
    return this._numero || 100;
  },
  set tamanho (numero) {
    this._numero = numero *200;
  }
} */

const button = {
  get element() {
    return this._element;
  },
  set element(tipo) {
    this._element = document.createElement(tipo);
  }
}

//button.element = 'button'; // set 
button.element; // get (<button></button>);
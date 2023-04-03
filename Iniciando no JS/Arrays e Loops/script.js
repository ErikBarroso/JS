let videoGames =['PS4', 'PS2', 'PS1', 'Xbox '];

//console.log(videoGames[1]);

/*for (let i = 0; i < videoGames.length; i++){
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS2'){
    break;
  }
}*/

let i = 0;
while(i < videoGames.length){
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS2'){
    console.log(videoGames[i] + ' está na posição ' + [i]);
    break;
    
  }
  i++;
}

/*let frutas = ['Uva', 'Banana', 'Abacaxi'];

frutas.forEach(function (nomeFruta,i) {
  console.log(nomeFruta,i);
})*/

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let anosBrasilCopa = [1959, 1962, 1970, 1994, 2022];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
/*for (let i = 0; i < anosBrasilCopa.length; i++){
  console.log(`O Brasil ganhou a copa de ${anosBrasilCopa[i]}`);
}


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
  if(frutas[i] === 'Pera'){
    break;
  }
}


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

let ultimaFruta = frutas[frutas.length-1];
console.log(ultimaFruta);
*/
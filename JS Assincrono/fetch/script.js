/*const doc = fetch('./doc.txt');

doc.then(resolucao => {
  console.log(resolucao);
})

fetch('./doc.txt').then(function(response) {
  console.log(response); // Response HTTP (Objeto)
});
 */

fetch('./arquivo.txt').then(function(response) {
  return response.text().then((corpo)=>{
  const conteudo3 = document.querySelector('.conteudo');
  conteudo3.innerText = corpo;
})
});


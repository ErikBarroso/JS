/*async function puxarDados(){
  const responseDados = await fetch('./dados.json');
  const jsonDados = await responseDados.json();

  document.body.innerText = jsonDados.aula;
}

puxarDados();*/


async function puxarDados() {
  try {
    const dadosResponse = await fetch('./dados.json');
    const dadosJSON = await dadosResponse.json();
    document.body.innerText = dadosJSON.titulo;
  }
  catch(erro) {
    console.log(erro);
    console.log('erik');
  }
}
puxarDados();

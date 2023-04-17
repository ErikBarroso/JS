async function puxarDados(){
  const responseDados = await fetch('./dados.json');
  const jsonDados = await responseDados.json();

  document.body.innerText = jsonDados.aula;
}

puxarDados();
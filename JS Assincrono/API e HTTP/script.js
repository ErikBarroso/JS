fetch('./dados.json')
.then(r => r.json())
.then(json => {
  json.forEach(materia =>{
    console.log(materia.aula);
  })
})
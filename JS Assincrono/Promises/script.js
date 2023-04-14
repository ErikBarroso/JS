/*const promessa = new Promise((resolve,reject) =>{
  let condicao = true;
  if(condicao) {
    setTimeout(() => {
      resolve({nome: 'Erik', idade: 26});
    }, 1000)
  } else {
    reject (Error('Um erro ocorreu na promise'))
  }
});

promessa.then (resolucao => console.log(resolucao))
console.log('teste');

const promessa = new Promise((resolve, reject) => {
  resolve('Etapa 1');
});

promessa.then(resolucao => {
  console.log(resolucao); // 'Etapa 1';
  return 'Etapa 2';
}).then(resolucao => {
  console.log(resolucao) // 'Etapa 2';
  return 'Etapa 3';
}).then(r => {
  const soma = r + 4;
  console.log(soma);
  return soma;
})
.then(r => {
  console.log(r); // Etapa 34
});

const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

promessa.then(resolucao => {
  console.log(resolucao);
}).catch(r => {
  console.log(r);
}); 

const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

promessa.then(p => {
  console.log(p);
}, r => {
  console.log(r);
}); */

const login = new Promise(resolve,rejeitado => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then(respostas => {
  console.log(respostas); // Array com ambas respostas
});


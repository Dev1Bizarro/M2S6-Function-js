/*Imagine que você tem uma API que irá retornar nomes de filmes para cada requisição. Vamos simular uma API assincrona que retorna um nome em cada requisição. Segue a “simulação” de API:

Você deve criar uma função que terá o seguinte conjunto de ids de requisição “[1,2,3,4,5,6,7,8,9,10]”. Note que estes ids são os mesmos valores das propriedades do array de filmes da função “fakeAPIFilmes”. Você deverá implementar, usando promise, um algoritmo que chame a função “fakeAPIFilmes” passando cada um dos id´s de requisição e imprimindo a resposta da função. Ao terminar a execução avalie se a impressão dos filmes segue a sequência das requisições (1,2,3…).*/

function fakeAPIFilmes(idRequisição) {
  const filmes = {
    1: "matrix",
    2: "O poderoso Chefão",
    3: "A espera de um milagre",
    4: "O clube da luta",
    5: "Coração valente",
    6: "O rei leão",
    7: "Forrest Gump - O Contador de Histórias",
    8: "Os bons companheiros",
    9: "O irlândes",
    10: "Um sonho de liberdade",
  };

  const tempoDeResposta = Math.random() * 5000;
  return new Promise(function(sucesso) {
    setTimeout(() => sucesso(filmes[idRequisição]), tempoDeResposta )
  });
}

  const requisicoes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 
    for (const req of requisicoes) {

     fakeAPIFilmes(req).then(resultado => console.log(req, resultado));
    }
 


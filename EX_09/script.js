/*O uso de async/await facilitou bastante o uso de promises em javascript. Esta abordagem fornece uma forma simples de programar de forma "síncrona" eventos assíncronos.

Utilizando a função “fakeAPIFilmes” do exercício anterior(ver exercício 8), implemente as chamadas a função usando async/await e veja como se comporta a ordem da impressão.

Lembre-se que alguns tipos de loop são mais indicados que outros para o uso de métodos assíncronos.*/

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
  return new Promise(function (sucesso) {
    setTimeout(() => sucesso(filmes[idRequisição]), tempoDeResposta)
  });
}

const requisicoes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

async function listaIdsFilmes() {
  
  for (const req of requisicoes) {

      await fakeAPIFilmes(req).then(resultado => console.log(req, resultado));
    }

}

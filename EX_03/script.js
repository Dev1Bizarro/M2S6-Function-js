/*Ao executar o programa há um erro que está indicando que não existe a propriedade “_nome” e você deve corrigir o problema sem alterar o nome da propriedade ou remover a função impressora dentro do método imprime.

Resolva isso lembrando dos contextos (escopos léxicos do js).*/

class MeuNome {
    constructor(nome, sobrenome) {
      this._nome = nome;
      this._sobrenome = sobrenome;
    }
  
  
    imprime(x) {
      const impressora = (x) => {
        console.log("Meu nome é", this._nome, this._sobrenome);
      }
  
      impressora();
    }
  }
  
  const meuNome = new MeuNome('Luis Carlos', 'Elias');
  meuNome.imprime();
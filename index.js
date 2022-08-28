//variaveis int, float, string:
let menor;
let maior;
let cityTown1;
let cityTown2;
let myCity1;
let myCity2;
let vitimasAcidente2 = 0;
let vitimasAcidente1 = 0;
let mediaUm = 0;
let mediaDois = 0;
let continuar;
//estrutura de repetição Do - While *Caso queira voltar a fazer a pesquisa:
do {
  //indice:
  console.log('Resultados do IBGE');
  console.log('Comparação Entre as Cidades');
  console.log('');
  //Dados Ciadade 1;
  const codigoCidade1 = prompt('Digite o Codigo da Cidade: ');
  const nomeCidade1 = prompt('Digite o Nome da Cidade');
  const numVeiculos1 = prompt('Digite o Numero de Veiculos de Passeio da Cidade');
  vitimasAcidente1 = prompt('Digite Numero de Acidentes de Transito Com Vitimas');
  //Dados da Cidade 2:
  console.log('');
  console.log('Agora Digite os Dados da Cidade que queira Comparar: ');
  console.log('');
  const codigoCidade2 = prompt('Digite o Codigo da Cidade: ');
  const nomeCidade2 = prompt('Digite o Nome da Cidade');
  const numVeiculos2 = prompt('Digite o Numero de Veiculos de Passeio da Cidade');
  vitimasAcidente2 = prompt('Digite Numero de Acidentes de Transito Com Vitimas');
  console.log(' ');
  console.log('Resultados da Pesquisa: ');

  //calculos da media de carros e acidentes:
  let mediaCar = (parseFloat(numVeiculos1) + parseFloat(numVeiculos2)) / 2;
  mediaUm = vitimasAcidente1 / 2;
  mediaDois = vitimasAcidente2 / 2;
  
  //função para maior ou menor indice das cidades: 
  if (vitimasAcidente1 <= vitimasAcidente2) {
    menor = vitimasAcidente1;
    cityTown1 = codigoCidade1;
    myCity1 = nomeCidade1;
    maior = vitimasAcidente2;
    cityTown2 = codigoCidade2;
    myCity2 = nomeCidade2;

    console.log(`O Maior índice de acidentes de trânsito é de ${maior} e o menor é de ${menor} `);
    console.log(`O Maior pertence a cidade de ${myCity2} cod: ${cityTown2} e o menor ${myCity1} cod: ${cityTown1} `);
    console.log(`A média de veículos das duas cidades juntas é de ${mediaCar}`);

  } else if (vitimasAcidente1 >= vitimasAcidente2) {
    menor = vitimasAcidente2;
    cityTown2 = codigoCidade2;
    myCity2 = nomeCidade2
    maior = vitimasAcidente1;
    cityTown1 = codigoCidade1;
    myCity1 = nomeCidade1;

    console.log(`O Maior índice de acidentes de trânsito é de ${maior} e o menor é de ${menor} `);
    console.log(`O Maior pertence a cidade de ${myCity1} cod: ${cityTown1} e o menor ${myCity2} cod: ${cityTown2} `);
    console.log(`A média de veículos das duas cidades juntas é de ${mediaCar}`);

  } else {
    console.log('nenhum valor informado, Por favor retorne a pesquisa');
  }
  console.log('');
  //função para media dos acidentes em cidades com menos de 2000 veiculos:
  if (numVeiculos1 <= 2000) {
    console.log(`A Cidade ${nomeCidade1} Possui Menos de 2000 veiculos e entra na média de acidentes com total de ${mediaUm}`);
  } else {
    console.log(`A cidade de ${nomeCidade1} não entra na média, pois ela tem mais de 2000 veiculos `);
  }
  if (numVeiculos2 <= 2000) {
    console.log(`A Cidade ${nomeCidade2} Possui Menos de 2000 veiculos e entra na média de acidentes com total de ${mediaDois}`);
  } else {
    console.log(`A cidade de ${nomeCidade2} não entra na média, pois ela tem mais de 2000 veiculos `);
  }
  console.log(' ');
  continuar = prompt('Deseja Realizar a Pesquisa Novamente? Digite 1 P/ Sim ou Outra Tecla para Finalizar');
  console.log(' ');
} while (continuar === '1');

console.log('Finalizada a Pesquisa, Obrigado, Volte Sempre!');












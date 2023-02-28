/*As arrow functions podem ter em seu corpo mais de uma linha e para isso usamos as chaves para delimitar o início e o fim do corpo da função. Contudo existem situações que queremos retornar em uma única linha um objeto e este também é delimitado pelo uso de chaves.*/


/*Você deve criar um array, usando as funções específicas do array, que contenha apenas carros da ford e que cada item deste novo array contenha apenas o nome e o valor dos carros. Além disso, só pode ter uma linha em cada função do array que você utilizar.*/ 


const carros = [
    {
        nome: "escort xr3",
        valor: 10000,
        marca: "Ford",
    },
    {
        nome: "Chevette",
        valor: 8000,
        marca: "Chevrolet",
    },
    {
        nome: "Landau",
        valor: 14000,
    marca: "Ford",
    },
    {
        nome: "maverick",
        valor: 18000,
    marca: "Ford",
    },
];


const resMarca = carros.filter(carros => carros.marca === "Ford").map(carro => ({nome: carro, marca: carro.marca,})

console.log(resMarca)


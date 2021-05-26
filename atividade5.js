// 5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console

function somar(x, y) {
  return x + y;
}
function subtrair(x, y) {
  return x - y;
}
function multiplicar(x, y) {
  return x * y;
}
function dividir(x, y) {
  return x / y;
}

let operação = "divisão";
let x = 2;
let y = 3;

switch (operação) {
  case "soma":
    console.log(`a soma entre ${x} e ${y} é = ${somar(x, y)}`);
    break;
  case "subtração":
    console.log(`a diferença entre ${x} e ${y} é = ${subtrair(x, y)}`);
    break;
  case "multiplicação":
    console.log(`o produto entre ${x} e ${y} é = ${multiplicar(x, y)}`);
    break;
  case "divisão":
    console.log(`o quociente entre ${x} e ${y} é = ${dividir(x, y)}`);
    break;

  default:
    console.log("Atribua entradas válidas.");
}

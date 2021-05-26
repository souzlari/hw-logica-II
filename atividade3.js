//3 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function divide(a, b) {
  return a / b;
}

function par(a, b) {
  if (a % b === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(divide(15, 3));
if (par(15, 3)) {
  console.log(
    "o resto é zero, então independente do quociente, imprimo que é par"
  );
} else {
  console.log("ERRO");
}

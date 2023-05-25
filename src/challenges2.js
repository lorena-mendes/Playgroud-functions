// Desafio 11
// eslint-disable-next-line max-lines-per-function, complexity, sonarjs/cognitive-complexity
function generatePhoneNumber(number) {
  if (number.length !== 11) return 'Array com tamanho incorreto.';
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] < 0 || number[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index = 0; index < number.length; index += 1) {
    let cont = 0;
    for (let index2 = 0; index2 < number.length; index2 += 1) {
      if (number[index] === number[index2]) {
        cont += 1;
        if (cont > 2) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  number.splice(0, 0, '(');
  number.splice(3, 0, ')');
  number.splice(4, 0, ' ');
  number.splice(10, 0, '-');
  return number.join('');
}

// Desafio 12
// eslint-disable-next-line complexity
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC || lineB >= lineA + lineC
  || lineC >= lineA + lineB) {
    return false;
  }
  if (lineA <= Math.abs(lineB - lineC) || lineB <= Math.abs(lineA - lineC)
  || lineC <= Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  const array = string.match(/[0-9]/g).map(Number);

  const total = array.reduce((a, c) => a + c);

  const result = total === 1 ? '1 copo de água' : `${total} copos de água`;

  return result;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

// Desafio 1
function compareTrue(carro,casa) {
  if (carro && casa) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(area,height) {
  return (area*height)/2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}


// Desafio 4
function concatName(nomes) {
  let names = nomes[nomes.length -1] + ", " + nomes[0];
  return names;
};

// Desafio 5
function footballPoints(wins,ties) {
  let pontuacao = (wins*3) + (ties*1)
  return pontuacao;
};

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

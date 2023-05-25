// Desafio 1
function compareTrue(carro, casa) {
  if (carro && casa) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(area, height) {
  return (area * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(nomes) {
  let names = `${nomes[nomes.length - 1]}, ${nomes[0]}`;
  return names;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = wins * 3 + ties * 1;
  return pontuacao;
}

// Desafio 6
function highestCount(numeros) {
  let maiorValor = numeros[0];
  let totalNumeros = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > maiorValor) {
      maiorValor = numeros[index];
      totalNumeros = 1;
    } else if (numeros[index] === maiorValor) totalNumeros += 1;
  }
  return totalNumeros;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  let resultado;

  if (dist1 < dist2) {
    resultado = 'cat1';
  } else if (dist2 < dist1) {
    resultado = 'cat2';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8
// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
function fizzBuzz(numero) {
  let numerosArray = [];
  for (let index = 0; index < numero.length; index += 1) {
    if (numero[index] % 3 === 0 && numero[index] % 5 === 0) {
      numerosArray.push('fizzBuzz');
    } else if (numero[index] % 3 === 0) {
      numerosArray.push('fizz');
    } else if (numero[index] % 5 === 0) {
      numerosArray.push('buzz');
    } else {
      numerosArray.push('bug!');
    }
  }
  return numerosArray;
}

// Desafio 9
function encode(codifica) {
  codifica = codifica.replace(/a/g, '1');
  codifica = codifica.replace(/e/g, '2');
  codifica = codifica.replace(/i/g, '3');
  codifica = codifica.replace(/o/g, '4');
  codifica = codifica.replace(/u/g, '5');
  return codifica;
}
function decode(decodifica) {
  decodifica = decodifica.replace(/1/g, 'a');
  decodifica = decodifica.replace(/2/g, 'e');
  decodifica = decodifica.replace(/3/g, 'i');
  decodifica = decodifica.replace(/4/g, 'o');
  decodifica = decodifica.replace(/5/g, 'u');
  return decodifica;
}

// Desafio 10
function techList(tecnologias, nome) {
  tecnologias = tecnologias.sort();
  if (tecnologias.length !== 0) {
    // eslint-disable-next-line guard-for-in
    for (let key in tecnologias) {
      tecnologias[key] = {
        tech: tecnologias[key],
        name: nome,
      };
    }
  } else {
    return 'Vazio!';
  }
  return tecnologias;
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

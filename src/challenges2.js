// Desafio 11
function generatePhoneNumber(number) {

  if (number.length !== 11) {
    return 'Array com tamanho incorreto.'
  };
  for (let index = 0; index < number.length; index += 1){
    if (number[index] < 0 || number[index] > 9 ) {
      return 'não é possível gerar um número de telefone com esses valores';
    };
  };
  for (let index = 0; index < number.length; index += 1){
    let cont = 0;
    for (let index2 = 0; index2 < number.length; index2 += 1) {
      if (number[index] === number[index2]) {
        cont +=1;
        if (cont > 2) {
          return 'não é possível gerar um número de telefone com esses valores';
        };
      };
    };
  };
  number.splice(0, 0,"(");
  number.splice(3, 0,")");
  number.splice(4, 0," ");
  number.splice(10, 0,"-");
  return number.join('');
};

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

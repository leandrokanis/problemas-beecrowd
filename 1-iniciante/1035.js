const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseFloat(lines.shift()) ;
const multiple_input = () => input().split(" ").map(i => parseFloat(i));

const main = () => {
  const dados = multiple_input();
  const A = dados[0];
  const B = dados[1];
  const C = dados[2];
  const D = dados[3];

  const par = x => x%2 == 0;
  const positivo = x => x > 0;

  if (
      (B > C)  &&
      (D > A)  &&
      ((C+D) > (A + B)) &&
      (positivo(C) && positivo(D))  &&
      (par(A))
    ){
      console.log("Valores aceitos");
  } else {
    console.log("Valores nao aceitos");
  }

  return true;

};

main();

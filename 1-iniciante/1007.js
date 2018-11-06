const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseInt(lines.shift()) ;

const diferenca = (A, B, C, D) => {
  return (A * B - C * D);
};

const main = () => {
  const A = input();
  const B = input();
  const C = input();
  const D = input();

  return (
    'DIFERENCA = ' + diferenca(A, B, C, D)
  );
};

console.log(main());

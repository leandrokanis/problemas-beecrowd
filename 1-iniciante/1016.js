const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseFloat(lines.shift()) ;
const multiple_input = () => input().split(" ").map(i => parseFloat(i));

const distancia = (x) => {
  return (x*2);
};

const main = () => {
  const a = input();

  return (
    distancia(a) + ' minutos'
  );

};

console.log(main());

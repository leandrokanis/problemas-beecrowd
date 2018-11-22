const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseFloat(lines.shift()) ;
const multiple_input = () => input().split(" ").map(i => parseFloat(i));

const consumo = (x,y) => {
  return (x/12 * y).toFixed(3);
};

const main = () => {
  const a = input();
  const b = input();

  return (
    consumo(a, b)
  );

};

console.log(main());

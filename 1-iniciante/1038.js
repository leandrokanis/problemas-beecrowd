const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => lines.shift();
const multiple_input = () => input().split(" ").map(i => parseFloat(i));

const tab = [0, 4, 4.5, 5, 2, 1.5];

const calc = (x, y) => {
  return (y * tab[x]).toFixed(2);
};

const main = () => {
  const [a,b] = multiple_input();

  return (
    'Total: R$ ' + calc(a, b)
  );

};

console.log(main());

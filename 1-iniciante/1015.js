const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => lines.shift() ;
const multiple_input = () => input().split(" ").map(i => parseFloat(i));

const distancia = (a,b) => {
  return Math.pow(Math.pow(b[0] - a[0], 2) +  Math.pow(b[1] - a[1], 2), 0.5).toFixed(4) ;
};

const main = () => {
  const a = multiple_input();
  const b = multiple_input();

  return (
    distancia(a, b)
  );

};

console.log(main());

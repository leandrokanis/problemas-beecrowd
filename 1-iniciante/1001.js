const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseInt(lines.shift()) ;

const sum = (x,y) => {
  return (x+y);
};

const main = () => {
  const a = input();
  const b = input();

  return (
    'X = ' + sum(a, b)
  );

};

console.log(main());

const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split(' ');
const input = () => parseInt(lines.shift()) ;

const maiorab = (a, b) => (a+b + Math.abs(a-b))/2;

const main = () => {
  const a = input();
  const b = input();
  const c = input();

  const maior = maiorab( maiorab(a, b), c );

  return(
    maior + " eh o maior"
  );
};

console.log(main());

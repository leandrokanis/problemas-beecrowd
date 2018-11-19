const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseFloat(lines.shift()) ;

const media = (x,y) => {
  return (x/y).toFixed(3);
};

const main = () => {
  const a = input();
  const b = input();

  return (
    media(a, b) + " km/l"
  );

};

console.log(main());

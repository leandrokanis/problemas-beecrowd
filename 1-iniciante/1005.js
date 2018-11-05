const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseFloat(lines.shift()) ;

const media = (x,y) => {
  return (((x*3.5)+(y*7.5))/11).toFixed(5);
};

const main = () => {
  const a = input();
  const b = input();

  return (
    'MEDIA = ' + media(a, b)
  );

};

console.log(main());

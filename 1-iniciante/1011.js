const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseFloat(lines.shift()) ;

const volume = (r) => {
  const pi =  3.14159;
  return ( (4.0/3.0) * pi * Math.pow(r, 3) ).toFixed(3);
};

const main = () => {

  return (
    'VOLUME = ' + volume(input())
  );

};

console.log(main());

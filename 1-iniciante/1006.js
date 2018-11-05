const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseFloat(lines.shift()) ;

const calc_media = (a, b, c) => {
  let a_med = (a * 0.2);
  let b_med = (b * 0.3);
  let c_med = (c * 0.5);
  return(
    (a_med + b_med + c_med).toFixed(1)
  );

};

const main = () => {
  const a = input();
  const b = input();
  const c = input();

  return (
    'MEDIA = ' + calc_media(a, b, c)
  );

};

console.log(main());

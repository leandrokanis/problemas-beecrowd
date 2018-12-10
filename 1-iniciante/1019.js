const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseInt(lines.shift()) ;
const multiple_input = () => input().split(" ").map(i => parseFloat(i));

const horas = (x) => {
  return parseInt(x/3600);
};

const minutos = (x) => {
  return parseInt(x/60)%60;
};

const segundos = (x) => {
  return (x%60)%60;
};

const main = () => {
  const a = input();
  console.log(horas(a) + ":" + minutos(a) + ":" + segundos(a));
  return true;

};

main();

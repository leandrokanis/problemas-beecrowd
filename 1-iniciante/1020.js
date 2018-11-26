const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseInt(lines.shift()) ;
const multiple_input = () => input().split(" ").map(i => parseFloat(i));

const anos = (x) => {
  return (parseInt(x/365) + " ano(s)");
};

const meses = (x) => {
  return (parseInt((x%365)/30) + " mes(es)");
};

const dias = (x) => {
  return (parseInt((x%365)%30) + " dia(s)");
};


const main = () => {
  const a = input();
  console.log(anos(a));
  console.log(meses(a));
  console.log(dias(a));
  return true;

};

main();

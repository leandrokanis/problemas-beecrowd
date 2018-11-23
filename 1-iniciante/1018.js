const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseFloat(lines.shift()) ;
const multiple_input = () => input().split(" ").map(i => parseFloat(i));

const notas = [100, 50, 20, 10, 5, 2, 1];

let a = input();
console.log(a);

for(let i of notas){
  const nota_qtd = Math.floor(a/i);
  console.log(nota_qtd + " nota(s) de R$ " + i + ",00");
  a = a - (i * nota_qtd);
}

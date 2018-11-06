const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseFloat(lines.shift()) ;

const salary = (x,y) => {
  const s = (x*y).toFixed(2);
  return (
    "SALARY = U$ " + s
  );
};

const number = (x) => {
  return (
    "NUMBER = " + x.toFixed(0)
    );
}

const n = input();
const h = input();
const v = input();

console.log(number(n));
console.log(salary(h, v));

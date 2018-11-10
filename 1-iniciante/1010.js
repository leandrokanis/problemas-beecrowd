const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => lines.shift().split(" ");

const num = (x) => parseFloat(x[0]);
const amount = (x) => parseFloat(x[1]);
const value = (x) => parseFloat(x[2]);

const calc_total= (a, b) => {
	const tot_a = amount(a) * value(a);
	const tot_b = amount(b) * value(b);
	return (tot_a+tot_b).toFixed(2);
};

const main = () => {
  const a = input();
  const b = input();

  return (
    'VALOR A PAGAR: R$ ' + calc_total(a, b)
  );

};

console.log(main());

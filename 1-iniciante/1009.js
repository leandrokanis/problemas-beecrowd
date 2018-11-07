const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseFloat(lines.shift()) ;


const calc_salario = (salario, vendas) => {
  const comissao = (vendas * 0.15) + salario;
  return (
    "TOTAL = R$ " + comissao.toFixed(2)
    );
}

const nome = input();
const salario = input();
const vendas = input();

console.log(calc_salario(salario, vendas));

const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split(' ');
const input = () => parseFloat(lines.shift()) ;

const calc_triangulo = (a, b) => {
  const area = (a*b)/2.0;
  return ("TRIANGULO: " + area.toFixed(3));
};

const calc_circulo = (r) => {
  const area = (3.14159 * Math.pow(r, 2));
  return ("CIRCULO: " + area.toFixed(3));
};

const calc_trapezio = (a, b, c) => {
  const area = (a + b) * c / 2.0;
  return ("TRAPEZIO: " + area.toFixed(3));
};

const calc_quadrado = (b) => {
  const area = b * b;
  return ("QUADRADO: " + area.toFixed(3));
};

const calc_retangulo = (a, b) => {
  const area = a * b;
  return ("RETANGULO: " + area.toFixed(3));
};

const main = () => {
  const a = input();
  const b = input();
  const c = input();

  return (
    calc_triangulo(a, c) + "\n" +
    calc_circulo(c) + "\n" +
    calc_trapezio(a, b, c) + "\n" +
    calc_quadrado(b) + "\n" +
    calc_retangulo(a, b)
  );

};

console.log(main());

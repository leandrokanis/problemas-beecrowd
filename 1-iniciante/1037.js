const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseFloat(lines.shift());
const multiple_input = () => input().split(" ").map(i => parseFloat(i));

const check_rage = (x) => {
    switch (true) {
      case (x >= 0 && x <= 25):
        return "Intervalo [0,25]";
      case (x > 25 && x <= 50):
        return "Intervalo (25,50]";
      case (x > 50 && x <= 75):
        return "Intervalo (50,75]";
      case (x > 75 && x <= 100):
        return "Intervalo (75,100]";
      default:
        return "Fora de intervalo";
    }
};

const main = () => {
  let a = input();
  return check_rage(a);
};

console.log(main());

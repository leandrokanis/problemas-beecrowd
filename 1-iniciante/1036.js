const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => lines.shift() ;
const multiple_input = () => input().split(" ").map(i => parseFloat(i));

const bhaskara1 = (a, b, c) => {
  return ((-b + Math.sqrt( Math.pow(b, 2) - (4*a*c) )) / (2*a)).toFixed(5) ;
};

const bhaskara2 = (a, b, c) => {
  return ((-b - Math.sqrt( Math.pow(b, 2) - (4*a*c) )) / (2*a)).toFixed(5) ;
};

const main = () => {
  const line1 = multiple_input();
  const a = line1[0];
  const b = line1[1];
  const c = line1[2];

  const r1 = bhaskara1(a, b, c);
  const r2 = bhaskara2(a, b, c);

  if(!isNaN(r1)){
    console.log( "R1 = " + r1 );
    console.log( "R2 = " + r2 );
  } else {
    console.log("Impossivel calcular");
  }

  return true;
};

main();

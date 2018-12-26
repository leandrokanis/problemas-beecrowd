const raw_input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = raw_input.split('\n');
const input = () => parseFloat(lines.shift()) ;
const mline = () => lines.shift().split(" ").map(i => parseFloat(i));
const minput = (line) => line.shift();


const count_digits = (line) => {
	n = minput(line);
	m = minput(line);
	return (
		Math.floor( Math.log10(n**m) + 1 )
	);
};

(() => {

	const n=input();

	for(let i = 0; i < n; i++){
		console.log(count_digits(mline()));
	}

})()


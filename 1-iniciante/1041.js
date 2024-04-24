// compara valores
// determina resultado

const composeQuadrante = (x, y) => {
  const quadranteOptions = {
    [x > 0 && y > 0]: 'Q1',
    [x < 0 && y > 0]: 'Q2',
    [x < 0 && y < 0]: 'Q3',
    [x > 0 && y < 0]: 'Q4',
    [x === 0 && y !== 0]: 'Eixo Y',
    [x !== 0 && y === 0]: 'Eixo X',
    [x === 0 && y === 0]: 'Origem',
  }

  return quadranteOptions.true
}

const main = (fileInput) => {
  const lines = fileInput.split('\n')

  const [x, y] = lines[0].split(' ').map(Number)

  return composeQuadrante(x, y)
}

// console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')))

module.exports = { main }

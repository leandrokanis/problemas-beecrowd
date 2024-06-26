const sum = (x, y) => {
  const result = x + y
  return `X = ${result}`
}

const main = (fileInput) => {
  const lines = fileInput.split('\n')

  const [a, b] = lines.map(Number)

  return sum(a, b)
}

// console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')))

module.exports = { main }

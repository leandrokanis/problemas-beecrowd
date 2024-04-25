const composeOrder = (numbers) => [...numbers].sort((x, y) => x - y)

const main = (fileInput) => {
  const lines = fileInput.split('\n')
  let result

  const usePrint = (lambda) => {
    result = result ? `${result}\n${lambda}` : lambda
  }

  const numbers = lines[0].split(' ').map(Number)
  const orderedNumbers = composeOrder(numbers)

  orderedNumbers.forEach((n) => usePrint(n))
  usePrint('')
  numbers.forEach((n) => usePrint(n))

  return result
}

// console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')))

module.exports = { main }

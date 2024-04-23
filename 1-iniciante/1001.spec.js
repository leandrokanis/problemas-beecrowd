const { main } = require('./1001')

jest.mock('fs')

let fileInput
let fileOutput

describe('1001', () => {
  test('example 1 ', () => {
    fileInput = '10\n9\n'
    fileOutput = 'X = 19'

    expect(main(fileInput)).toEqual(fileOutput)
  })

  test('example 2', () => {
    fileInput = '-10\n4'
    fileOutput = 'X = -6'

    expect(main(fileInput)).toEqual(fileOutput)
  })

  test('example 3', () => {
    fileInput = '15\n-7'
    fileOutput = 'X = 8'

    expect(main(fileInput)).toEqual(fileOutput)
  })
})

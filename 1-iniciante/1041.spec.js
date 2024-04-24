const { main } = require('./1041')

jest.mock('fs')

let fileInput
let fileOutput

describe('1041', () => {
  test('example 1 ', () => {
    fileInput = '4.5 -2.2'
    fileOutput = 'Q4'

    expect(main(fileInput)).toEqual(fileOutput)
  })

  test('example 2', () => {
    fileInput = '0.1 0.1'
    fileOutput = 'Q1'

    expect(main(fileInput)).toEqual(fileOutput)
  })

  test('example 2', () => {
    fileInput = '0.0 0.0'
    fileOutput = 'Origem'

    expect(main(fileInput)).toEqual(fileOutput)
  })
})

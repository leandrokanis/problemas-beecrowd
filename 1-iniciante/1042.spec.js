const { main } = require('./1042')

jest.mock('fs')

let fileInput
let fileOutput

describe('1042', () => {
  test('example 1 ', () => {
    fileInput = '7 21 -14'
    fileOutput = '-14\n7\n21\n\n7\n21\n-14'

    expect(main(fileInput)).toEqual(fileOutput)
  })

  test('example 2', () => {
    fileInput = '-14 21 7'
    fileOutput = '-14\n7\n21\n\n-14\n21\n7'

    expect(main(fileInput)).toEqual(fileOutput)
  })
})

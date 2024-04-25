import { main } from './__FILENAME__'

jest.mock('fs')

let fileInput: string
let fileOutput: string

describe('__FILENAME__', () => {
  test('example 1 ', () => {
    fileInput = '__INPUT__'
    fileOutput = '__OUTPUT__'

    expect(main(fileInput)).toEqual(fileOutput)
  })

  test('example 2', () => {
    fileInput = '__INPUT__'
    fileOutput = '__OUTPUT__'

    expect(main(fileInput)).toEqual(fileOutput)
  })
})

const { main } = require('./1040')

jest.mock('fs')

describe('1040', () => {
  test('example 1', () => {
    const fileInput = '2.0 4.0 7.5 8.0\n6.4'
    const fileOutput =
      'Media: 5.4\nAluno em exame.\nNota do exame: 6.4\nAluno aprovado.\nMedia final: 5.9'

    expect(main(fileInput)).toEqual(fileOutput)
  })

  test('example 2', () => {
    const fileInput = '2.0 6.5 4.0 9.0'
    const fileOutput = 'Media: 4.8\nAluno reprovado.'

    expect(main(fileInput)).toEqual(fileOutput)
  })

  test('example 3', () => {
    const fileInput = '9.0 4.0 8.5 9.0'
    const fileOutput = 'Media: 7.3\nAluno aprovado.'

    expect(main(fileInput)).toEqual(fileOutput)
  })
})

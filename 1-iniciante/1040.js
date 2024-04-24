const composeAverage = (notes) => notes.reduce((acc, note) => acc + note, 0) / notes.length

const composeNote = (notes) =>
  (notes[0] * 2 + notes[1] * 3 + notes[2] * 4 + notes[3]) / (2 + 3 + 4 + 1)

const shouldBeInExame = (note) => note >= 5 && note < 7

const composeAvaluation = (note) => {
  const avaluation = {
    [note >= 7]: 'Aluno aprovado.',
    [note < 5]: 'Aluno reprovado.',
    [shouldBeInExame(note)]: 'Aluno em exame.',
  }

  return avaluation.true
}

const composeReavaluation = (finalNote) => (finalNote > 5 ? `Aluno aprovado.` : `Aluno reprovado.`)

const main = (fileInput) => {
  const lines = fileInput.split('\n')
  const notes = lines[0].split(' ').map(Number)
  const average = composeNote(notes)
  const avaluation = composeAvaluation(average)

  let output

  const usePrint = (result) => {
    output = output ? `${output}\n${result}` : result
  }

  usePrint(`Media: ${average.toFixed(1)}`)
  usePrint(avaluation)

  if (shouldBeInExame(average)) {
    const examNote = Number(lines[1])
    usePrint(`Nota do exame: ${examNote.toFixed(1)}`)

    const finalNote = composeAverage([average, examNote])
    const reavaluation = composeReavaluation(finalNote)

    usePrint(reavaluation)
    usePrint(`Media final: ${finalNote.toFixed(1)}`)
  }

  return output
}

// console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')))

module.exports = { main }

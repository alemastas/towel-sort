
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if(matrix === undefined) { 

    return matrix = []

  } else {
    matrix.map(el => {
      const index = matrix.indexOf(el)
      if(index % 2) {
        matrix[index].reverse()
      }
    })
    return matrix.flat()
  }

}

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) {
        return []
      } 
    let arr = [];
    let ml=matrix.length;
    for(i=0; i < ml ; i++) {
        if(i % 2 === 0) {           
            arr.push(matrix[i])
        } else {
            matrix[i].reverse();
            arr.push(matrix[i]);
        }


    }
    return arr.flat();
  }

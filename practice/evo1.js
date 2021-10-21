function spiralTraversalV(T,N, matrix){
  var top = 0;
  var bottom = N-1
  var left = 0;
  var right = N-1;
  var count = 0;
  var Newmatrix = [];
  var total = N*N;
  while(count < total){
      for(i = top; i <= bottom; i++){
          Newmatrix.push(matrix[i][right])
          count++;
      }
      right++;
      for( j=right; j >=left;j--){
          Newmatrix.push(matrix[bottom][j])
          count++;
      }
    bottom--;
      for(k=bottom ; k >= top; k--){
          Newmatrix.push(matrix[k][left])
      count++;
    }
    left++;
    for(l=left;l <= right;l++){
        Newmatrix.push(matrix[top][l])
        count++;
    }
    top++;
  }
  console.log(Newmatrix.join(" "))
}

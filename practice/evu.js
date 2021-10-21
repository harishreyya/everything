function spirallyTraversingAMatrix(n, mat){
 var mat1 = [];
 var top = 0;
 var left = 0;
 var right = n-1;
var count = 0;
var size = n*n;
while(size> count){
  for(i=left;i<n-1;i++){
    mat1.push(mat[top][i])
    count++;
  }
  top++;
  for(j=top;j<bottom;j++){
    mat1.push(mat[j][right])
    count++;
  }
  right--;
  for(k=right;k>=left;k--){
    mat1.push(mat[bottom][k])
    count++;
  }
  bottom--;
  for(l=bottom;l>=top;l--){
    mat1.push(mat[l][left])
    count++;
  }
  left++;

}
console.log(mat1.join(" "))
}

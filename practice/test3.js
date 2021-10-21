function spiralTraversalIV(N, arr){
  var arr1 = [];
  
  for(j=N-1;j>=0;j--){
      arr1.push(arr[j][N-1])
}
for(j=N-2;j>=0;j--){
    arr1.push(arr[0][j])
}
for(j=1;j<N;j++){
    arr1.push(arr[j][0])
}
for(j=1;j<N-2;j++){
    arr1.push(arr[N-1][j])
}
for(j=N-1;j>0;j--){
    arr1.push(arr[N-2][j])
}
console.log(arr1)
}
/*
1
3 
1 2 3
4 5 6
7 8 9
*/
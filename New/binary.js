
function runProgram(input) {
  input = input.trim().split("\n");
  var testcases = +input[0];
  var line = 1
  for(i=0;i<testcases;i++){
    var row = input[line++].trim().split(" ").map(Number);
    var arr=[];
    for(j=0;j<row;j++){
        arr.push(input[line++].trim().split(" ").map(Number))
    }
    var n = arr.length
    var mat=[];
   for(k=n-1;k>=0;k--){
     mat.push(arr[k][0]);
   }for(l=1;l<n;l++){
     mat.push(arr[0][l]);
   }for(m=1;m<n;m++){
     mat.push(arr[m][n-1])
   }for(o=n-2;o>=1;o--){
     mat.push(arr[n-1][o])
   }console.log(mat.join(" "))
  }
 
  }



if (process.env.USERNAME === 'haris') {
  runProgram(`1
  3
  1 2 3
  4 5 6
  7 8 9`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}


/*        ans = []
        n = matrix.length
        for (i = n-1;i>=0;i--) {
            ans.push(matrix[i][0])
        }
        for (i = 1;i<n;i++){
            ans.push(matrix[i][i])
        }
        for (i = n-2;i>=0;i--){
                ans.push(matrix[i][n-1])
        }
        return ans

}*/
 

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var line = 1;
  var arr = [];
  var arr2 = [];
  sum = 0;
  for(i=0;i<n;i++){
    var arr1 = input[line++].trim().split(" ").map(Number);
    arr.push(arr1)
  }
  for (j=0;j<n;j++){
  arr2.push(arr[0][j])
  }
  for (j=1;j<n;j++){
    arr2.push(arr[j][n-1])
  }
  for (j=n-2;j>=0;j--){
    arr2.push(arr[n-1][j])
  }
  for(j=n-2;j>0;j--){
    arr2.push(arr[j][0])
  }
  for(j=n-2;j>0;j--){
    for(i=n-2;i>0;i--){
      if((j+i==n-1)&&(j!=i)){
        arr2.push(arr[i][j])
      }
    }
  } 
  for(j=1;j<n-1;j++){
    for(i=0;i<n-1;i++){
      if(i==j){
        arr2.push(arr[i][j])
      }
    }
  }for(i=0;i<arr2.length;i++){
  sum = sum + arr2[i]
  }
  console.log(sum)
  }
  
  if (process.env.USERNAME === 'haris') {
    runProgram(`5
    1 2 3 4 5
    6 7 8 9 1
    2 3 4 5 6
    7 8 9 1 2
    3 4 5 6 7`);
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
  
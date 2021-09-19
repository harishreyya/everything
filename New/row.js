
function runProgram(input) {
 input = input.trim().split("\n");
 var[row,col] = input[0].trim().split(" ").map(Number);
 var line = 1;
 for(i=0;i<row;i++){
     var arr =  input[line++].trim().split(" ").map(Number);
     var sum =0;
     for(j=0;j<arr.length;j++){
       sum+=arr[j];
      
     } console.log(sum)
 }
}

if (process.env.USERNAME === 'haris') {
  runProgram(`3 2
  1 2 
  3 4
  5 6
  `);
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

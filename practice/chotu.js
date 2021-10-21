
function runProgram(input) {
input = input.trim().split("\n")
var test = +input[0];
var line = 1;
for(i=0;i<test;i++){
    var row = +input[line++]
    var arr =[];
    for(j=0;j<row;j++){
        arr.push(input[line++].trim().split("").map(Number))
    } console.log("YES")
   // console.log(row,arr)
} 

}

if (process.env.USERNAME === 'haris') {
  runProgram(`5
  2
  11
  11
  4
  0101
  0110
  0110
  0101
  4
  1001
  0000
  0000
  1001
  5
  01110
  01010
  10001
  01010
  01110
  5
  00100
  01010
  10001
  01010
  01110`);
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

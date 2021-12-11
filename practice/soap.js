function runProgram(input) {
 input=input.trim().split("\n");
 let N = +input[0];
 let arr = input[1].trim().split(" ").map(Number);
 let Q = +input[2];
 let line = 1;
 for(i=0;i<Q;i++){
     var M = input[line].trim().split(" ").map(Number);
     line++;
 }
 console.log(N,arr,Q,M)
}

if (process.env.USERNAME === 'haris') {
  runProgram(`5
  1 4 10 5 6
  4
  2
  3
  5
  11`);
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
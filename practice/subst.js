function runProgram(input) {
 input = input.trim().spilt("\n");
 let test = +input[0];
 let line = 1;
 for(i=0;i<test;i++){
     let [N,K] = input[line++].trim().split(" ").map(Number)
     
 }
}

if (process.env.USERNAME === 'haris') {
  runProgram(`2
  4 2
  4 3 2 1
  2 1
  2 3`);
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


function runProgram(input) {
 var input = input.trim().split("\n");
 var size = +input[0];
 var str = input[1].trim().split("");
 for(i=0;i<str.length;i++){
     console.log(str[i])
 }
}

if (process.env.USERNAME === 'haris') {
  runProgram(``);
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

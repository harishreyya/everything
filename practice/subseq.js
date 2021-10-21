
 
function runProgram(input) {
 input = input.trim().split("\n");
 var size = +input[0];
 var str = input[1].trim().split("");
var arr = []
 for(i=0;i<str.length;i++){
    arr = "";
     for(j=0;j<str.length;j++){
        console.log(str[j])
     }
    }
}

if (process.env.USERNAME === 'haris') {
  runProgram(`4
  abcd`);
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

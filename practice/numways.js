
function numberWays(n){
    if(n==0){
        return 1;
    }if(n<0){
        return 0;
    
    }else{
        return numberWays(n-1) + numberWays(n-3) +numberWays(n-5)
    }
}



function runProgram(input) {
 input = input.trim().split("\n")
 var n = +input[0];

console.log(numberWays(n))
}

if (process.env.USERNAME === 'haris') {
  runProgram(`7`);
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


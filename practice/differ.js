function diffWays(N){
    if(N<0){
        return 0;
    }else if(N==0){
        return 1;
    }else{
        return diffWays(N-1) +  diffWays(N-3) +  diffWays(N-4)
    }
}


function runProgram(input) {
 input = input.trim().split("\n");
 let N = +input[0];
 console.log(diffWays(N))
}

if (process.env.USERNAME === 'haris') {
  runProgram(`5`);
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

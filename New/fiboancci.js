function fib(n){
    
    if (n == 0){
        return 0;

    
    }if (n == 1 || n == 2){
        return 1;

   
    }else{
        return (fib(n - 1) + fib(n - 2));
}
}
function runProgram(input) {
 input = input.trim().split("\n");
 var n = +input[0];

 console.log( fib(n))
}

if (process.env.USERNAME === 'haris') {
  runProgram(`4`);
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

function power(n,p){

    if (p == 0){ 
        return 1;
    }else {   
        return n*power(n,p-1);    
    }

 }
function runProgram(input) {
 input = input.trim().split("\n");
 var [n,p] = input[0].trim().split(" ").map(Number)

 console.log( power(n,p))
}

if (process.env.USERNAME === 'haris') {
  runProgram(`2 4`);
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

function numberWay(n) {
if(n==0||n==1){
    return 1;

}else if(n == 2){
  return 2;
}else{
    return numberWay(n-3)+numberWay(n-2)+numberWay(n-1);
}
}



function runProgram(input) {
 input = input.trim().split("\n");
 var n = +input[0];
console.log(numberWay(n))
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


function runProgram(input) {
 input = input.trim().split("\n");
 let size = +input[0];
 let arr = input[1].trim().split(" ").map(Number).sort((a,b) => (a-b));
let maximum = [];
let sum = 0;
 for(i=0;i<arr.length;i++){
     maximum.push(arr[i]*[i])
 }
 console.log(maximum)
for(i=0;i<maximum.length;i++){
    sum+= maximum[i]
}
console.log(sum)
}

if (process.env.USERNAME === 'haris') {
  runProgram(`10
  0 9 22 20 19 20 11 5 0 2`);
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

function runProgram(input) {
 input = input.trim().split("\n");
 let [N,C,R] = input[0].trim().split(" ").map(Number);
 let arr = input[1].trim().split(" ").map(Number).sort((a,b) => (a-b));
let sum = 0;
 for(i=0;i<C;i++){
     sum+= arr[i]
 }if(sum <= R){
     console.log("Party")
 }else{
     console.log("Sad")
 }
}

if (process.env.USERNAME === 'haris') {
  runProgram(`5 3 24
  123 100 21 20 13`);
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


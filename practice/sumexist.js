function runProgram(input) {
 input = input.trim().split("\n");
 let size = +input[0];
 let arr = input[1].trim().split(" ").map(Number);
 let sum = +input[2];
let res = []
 for(i=0;i<arr.length;i++){
     if(arr[i]+arr[i+1] == sum){
         res.push(sum) 
     }
 }
 console.log(res)
 if(res[0]== sum){
     console.log("yes")
 }else{
     console.log("no")
 }
}

if (process.env.USERNAME === 'haris') {
  runProgram(`5
  1 2 3 6 9
  16`);
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


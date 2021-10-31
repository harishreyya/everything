
function runProgram(input) {
 input = input.trim().split("\n");
 var [size,num] =  input[0].trim().split(" ").map(Number);
 var arr  = input[1].trim().split(" ").map(Number);
var count = 1;
 //console.log(size,num,arr)
 for(i=0;i<arr.length;i++){
     if((arr[i]<num)||(arr[i]==num)){
         count++;
     }
 }console.log(count)
}

if (process.env.USERNAME === 'haris') {
  runProgram(`3 3
  1 2 3`);
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


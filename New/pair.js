function runProgram(input) {
 input = input.trim().split("\n");
 var test = +input[0];
 var line = 1;
 for(a=0;a < test;a++){
var length = +input[line++];
var arr = input[line++].trim().split(" ").map(Number);
var K = +input[line++];
var stack = [];
var sum = 0;
//console.log(test,length,arr,K)
for(i=0;i<arr.length;i++){
    sum = 0;
    for(j=i+1;j<arr.length;j++){
        sum = arr[i] +arr[j];
        stack.push(sum);
    }   
}
for(m=0;m<stack.length;m++){
    if(stack[stack.length-1]<K){
        console.log(stack[stack.length-1])
    }else{
        console.log("-1")
    }
}

 }}


if (process.env.USERNAME === 'haris') {
  runProgram(`2
  5
  1 2 3 4 5
  7
  3
  30 10 20
  15`);
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


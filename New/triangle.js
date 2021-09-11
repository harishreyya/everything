function runProgram(input) {
 var input = input.trim().split("\n");
 var test = +input[0];
 var line = 1;
 for(i=0;i<test;i++){
     var arr = input[line++].trim().split(" ").map(Number);
   if(((arr[0]+arr[1]) > arr[2]) || ((arr[2]+arr[1]) > arr[0]) || ((arr[0]+arr[2]) > arr[1])){
       console.log("No")
   }else{
    console.log("Yes")
   }
 }
}

if (process.env.USERNAME === 'haris') {
  runProgram(`4
  4 5 13
  7 1 8
  2 5 4
  2 2 2`);
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
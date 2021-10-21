
 

function runProgram(input) {
    var input = input.trim().split("\n")
   var size = Number(input[0]);
   var line = 1;
   var arr = input[line++].trim().split(" ").map(Number);
   var reverse = [];
   for(i=arr.length-1;i>=0;i--){
     reverse.push(arr[i])
   }console.log(reverse.join(" ").trim())
   }
   
   if (process.env.USERNAME === 'haris') {
     runProgram(`5
     1 3 2 4 5`);
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
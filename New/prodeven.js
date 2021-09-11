function runProgram(input) {
    var input = input.trim().split("\n");
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
   var prod = 1;
   for (i=0;i<arr.length;i++){
       if(i%2==0){
           prod = prod*arr[i]
       }
   }console.log(prod)
   }
   
   if (process.env.USERNAME === 'haris') {
     runProgram(`4
     1 2 3 4`);
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
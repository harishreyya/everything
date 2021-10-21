function runProgram(input) {
   

var palindrome = "";
for(var i = 0; i < input.length; i++) {
   if(input[i] !=input[input.length - 1 - i]) {
       console.log("No");
     
   } else {
       console.log("Yes"); 

   }
   }
   
}
 
 if (process.env.USERNAME === 'haris') {
   runProgram(`1221`);
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
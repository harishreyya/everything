
function runProgram(input) {
 input =input.trim().split("\n");
 var [row,col] = input[0].trim().split(" ").map(Number);
 var line =1;
 for(i=0;i<row;i++){
     var arr = [];
     arr.push(input[line++].trim().split(" ").map(Number));

 
 
     for(a=0;a<arr.length;a++){
var product = 1;
  for(b=a;b<arr.length;b++){
    
  }
     }
 console.log(product)
    }
}

if (process.env.USERNAME === 'haris') {
  runProgram(`3 3 
  1 2 3
  4 5 6
  7 8 9`);
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

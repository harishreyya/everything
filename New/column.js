function runProgram(input) {
 input = input.trim().split("\n")
 
  var [length,width] = input[0].trim().split(" ").map(Number);
  var line = 1;
   var arr = [];
  for(var k = 0;k<length;k++){
      arr.push(input[line++].trim().split(" ").map(Number));
  }
  console.log(arr)  
 
}
  if (process.env.USERNAME === "haris") {
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
  
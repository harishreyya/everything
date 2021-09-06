function runProgram(input) {
  input = input.trim().split("\n");
  var testcases = Number(input[0]);
  var line = 1;
  for(var i = 0; i < testcases; i++) {
      var size = Number(input[line++]);
      var arr = input[line++].trim().split(" ").map(Number)
    
      var res = 0;
      var weight = 1;
      for(var j = 0; j < arr.length; j++) {
          res  += (weight * arr[j]);
          weight++;
      }
      console.log(res)
  }
}
  if (process.env.USERNAME === 'haris') {
    runProgram(`2
    5
    1 2 3 4 5
    2
    100 1`);
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
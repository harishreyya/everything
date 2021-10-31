
function binary(num, str) {
  if (num < 1) {
      console.log(str)
      return
  }

  var ans = num % 2;
  num = Math.floor(num / 2)
  str = ans + str;

  return binary(num, str)

}
function runProgram(input) {
  input = input.trim().split("\n");
  var test = +input[0]
  var line = 1;
  for (var i = 0; i < test; i++) {
      var num = +input[line++]
      binary(num, str = "")
  }

}

if (process.env.USERNAME === "haris") {
  runProgram(`2
  15
  128`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function(input) {
      read += input;
  });
  process.stdin.on("end", function() {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
  });
  process.on("SIGINT", function() {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
  });
}
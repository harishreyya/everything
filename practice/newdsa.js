function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = Number(input[0]);
    var line = 1;
    for(i=0;i<=testcases;i++);
    var size = Number(input[line]);
    line++;
    var mat = [];
    for(i=1;i<=size;i++)

    mat.push(input[line].trim().split(" ").map(Number));
    //line++;

 console.log(mat)
}

if (process.env.USERNAME === 'haris') {
  runProgram(`1
  3
  1 2 3
  4 5 6
  7 8 9
  `);
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

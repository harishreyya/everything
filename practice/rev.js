function runProgram(input) {
 input = input.trim().split("\n");
 let n = input[0].trim().split("").map(Number);
/* let arr =[]
 for(i=n.length-1;i>=0;i--){
     arr.push(n[i])
 }
console.log(arr.join(""))
}
*/
}

if (process.env.USERNAME === 'haris') {
  runProgram(`197`);
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


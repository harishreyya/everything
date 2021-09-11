function runProgram(input) {
 var input = input.trim().split("\n");
 var size = +input[0];
 var arr = input[1].trim().split(" ").map(Number);
 var salary = +input[2];
var sum = 0;
for(i=0;i<arr.length;i++){
    sum += arr[i];

}if (sum > salary){
    console.log("Debt")
}else if (sum < salary){
    console.log("Save")
}else{
   
        console.log("Neutral")
}
}

if (process.env.USERNAME === 'haris') {
  runProgram(`5
  1 2 3 4 5
  15`);
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
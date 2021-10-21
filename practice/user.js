
function runProgram(input) {
  input = input.trim().split("\n");
  var size = Number(input[0]);
  var arr = input[1].trim().split(" ").sort().map(Number);
  var sumlow = 0;
  var sumhigh = 0;
  console.log(arr);
  for(i=0;i<arr.length/2;i++){
    // arr[i]
    } //console.log(sumlow);
for(i=arr.length-1;i>=arr.length/2;i--){
  sumhigh = sumhigh + arr[i]
  
}if (sumhigh>sumlow){
  console.log(sumhigh-sumlow);
}else{
  console.log(sumlow-sumhigh);
}
}
if (process.env.USERNAME === "haris") {
  runProgram(`6
1 2 3 4 5 -6`);
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

 

function runProgram(input) {
 input = input.trim().split("\n");
 var N = +input[0];
 var arr = input[1].trim().split(" ").map(Number).sort();

var sum =0; 
for(i=0;i<arr.length;i++){
  if(i%2==0){
      sum = sum +arr[i];
  }
}
console.log(sum);

}

if (process.env.USERNAME === 'haris') {
  runProgram(`2
  1 3 1 2`);
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

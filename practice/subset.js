function numberWays(arr){
var res =0;
for(i=0;i<arr.length;i++){
    var subset = 0;
    for(j=i;j<arr.length;j++){
        subset += arr[j];
        if(subset%2==1){
            res++;
        }
    }
}
console.log(res)
}



function runProgram(input) {
 input = input.trim().split("\n");
 var size = +input[0];
 var arr = input[1].trim().split(" ").map(Number);
 numberWays(arr);

}

if (process.env.USERNAME === 'haris') {
  runProgram(`3
  1 2 3`);
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


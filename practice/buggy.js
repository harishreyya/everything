function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
   let res = []
   
    for(i=0;i<arr.length;i++){
        if(arr[i]== 1){
     console.log(i)
    
        }else {
           console.log(-1)
           break;
        }
    }
   
   
   }

if (process.env.USERNAME === 'haris') {
  runProgram(`5
  0 0 0 0 1`);
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


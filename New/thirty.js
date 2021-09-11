
function runProgram(input) {
    // var input = input.trim().split(" ")
     var arr = input.trim().split(" ").map(Number)
     var sum = 0;
      //console.log(arr)
    for(i=0;i<arr.length;i++){
    sum += (arr[i]*2);
    } console.log(sum)
    }
    
    if (process.env.USERNAME === 'haris') {
      runProgram(``);
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
    
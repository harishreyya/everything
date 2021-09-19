
function runProgram(input) {
    input =input.trim().split("\n");
    var test = +input[0];
    var line =1;
    for (i=0;i<test;i++){
        var length = +input[line++]

        var arr= input[line++].trim().split(" ").map(Number);
   var sum =0;
      // console.log(test,length,arr)
      for(j=0;j<arr.length;j++){
          if((arr[j]%2)==1){
              sum+= arr[j];
          }
      }
        console.log(sum) 

        }
    }
    


if (process.env.USERNAME === 'haris') {
  runProgram(`2
  3
  1 2 3
  5
  2 2 2 2 1`);
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

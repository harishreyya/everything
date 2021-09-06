
function runProgram(input) {
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for (i=0;i<test;i++){
        var size = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
      
        
        for(j=0;j<arr.length;j++){
            for(k=j;k<=arr.length;k++){
                if(arr[j]!= arr[k]){
                    console.log(arr[j])
                }
            }
        }

      
    }

}

if (process.env.USERNAME === 'haris') {
  runProgram(`1
  5
  1 2 1 3 4 4 5 2 3`);
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

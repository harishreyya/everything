function runProgram(input) {
    input = input.trim().split("\n")
    
    let arr = input[0].trim().split("")
    let arr1 = input[1].trim().split("")
    let res = [];
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr1.length;j++){
            if(arr[i] == arr1[j]){
              res.push(arr[i])
            }
        }
    } console.log(res)
}

if (process.env.USERNAME === 'haris') {
  runProgram(`AGGTAB
  GXTXAYB`);
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


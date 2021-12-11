function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input[0];
    let arr = input[1].trim().split(" ").map(Number)
   let arr1 = [];
    for(i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
         var res = arr[i+1]-arr[i]
         arr1.push(res)
        }else if(arr[i]>arr[i+1]){
          var res1 = arr[i]-arr[i+1]
          arr1.push(res1)
        }
    }
    console.log(arr1)
    arr1.sort((a,b)=> a-b)
    
   console.log(arr1[arr1.length-1])
   }
if (process.env.USERNAME === 'haris') {
  runProgram(`4
  5 10 6 8`);
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




function runProgram(input) {
 input = input.trim().split("\n");
 var test = +input[0];
 var line = 1;
 for(i=0;i<test;i++){
  var [size, K] = input[line++].trim().split(" ").map(Number);
  var arr = input[line++].trim().split(" ").map(Number);
  console.log(checkWin(size,K,arr))
 }
function checkWin(size,K,arr){
  for(a=0;a<arr.length;a++){
      for(b=a;b<arr.length;b++){
        if(arr[a]+arr[b] != K){
             return "Yes"
             
          }else{
            return "No";
           
          }
      }
  }
}
}


if (process.env.USERNAME === 'haris') {
  runProgram(`2
  5 31
  10 11 13 17 21
  5 44
  10 11 13 17 21`);
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

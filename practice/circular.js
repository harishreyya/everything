
function runProgram(input) {
 input=input.trim().split("\n");
 var test= +input[0];
 var line = 1;
 for(i=0;i<test;i++){
     var length = +input[line++];
     var arr = [];
     for(j=0;j< length;j++){
    arr.push(input[line++].trim().split(" ").map(Number));}
 } 
 var array = [];
 for(a=arr.length-1;a>=0;a--){
  array.push(arr[a][0])
 }
 for(a=1;a<arr.length;a++){
     array.push(arr[0][a]);
 }
 for(a=1;a<arr.length;a++){
     array.push(arr[a][arr.length-1])
 }
 for(a=arr.length-1;a>=1;a--){
     array.push(arr[arr.length-1][a])
 }
 console.log(array.join(" "))
}

if (process.env.USERNAME === 'haris') {
  runProgram(`1
  3
  1 2 3
  4 5 6
  7 8 9`);
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

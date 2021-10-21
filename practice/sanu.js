
function runProgram(input) {
input = input.trim().split("\n")
var [row,col] = input[0].trim().split(" ").map(Number);
var line = 1;
var arr = [];
for(i=0;i<row;i++){
arr.push(input[line++].trim().split(" ").map(Number))
}
var sum1 =[];
var sum2 = [];
var sm1 = 0;
var sm2 = 0;
//console.log(Math.ceil(col/2))
for(j=col-1;j>=Math.floor(col/2);j--){
    sum1.push(arr[0][j])
}
for(j=1;j<row;j++){
 sum1.push(arr[j][Math.floor(col/2)])
}
//console.log(sum1)
for(j=Math.floor(col/2)-1;j>=0;j--){
    sum1.push(arr[row-1][j])
}
for(j=0;j<=Math.floor(row/2);j++){
    sum2.push(arr[j][0])
}
for(j=1;j<col;j++){
    sum2.push(arr[Math.floor(row/2)][j])
}
for(j=Math.floor(row/2)+1;j<row;j++){
    sum2.push(arr[j][col-1])
}for(j=0;j<sum1.length;j++){
    sm1 = sm1+ sum1[j];
}for(j=0;j<sum2.length;j++){
    sm2 = sm2+ sum2[j];
}if(sm1>sm2){
    console.log(sm1-sm2)
}else{
    console.log(sm2-sm1)
}
}
if (process.env.USERNAME === 'haris') {
  runProgram(`3 5
  1 2 3 4 5
  6 7 8 9 10
  11 12 13 14 15`);
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

/*
function isItPalindrome(n, arr){
  
   var count = 0; 
  var count1 = 0;
  
  for(var i = 0; i < n; i ++) {
    if(arr[i] == 1) {
      count++;
   } if (arr[i] == 2) {
      count1++;
    }
  } if(count % 2 == 0 || count1 % 2 == 0) {
    console.log("YES")
    } else {
    console.log("NO")
    }
   }
   */
  
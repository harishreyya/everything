function runProgram(input) {
input = input.trim().split("\n");
var test = +input[0];
var line =1;
for(i=0;i<test;i++){
var length = +input[line++];
var arr1 = input[line++].trim().split(" ").map(Number).sort();
var arr2 = input[line++].trim().split(" ").map(Number).sort();
//  console.log(test,length,arr1,arr2)
var array1 = [];
var array2 = [];
var count = 0;
for(var a=0;a<arr1.length;a++){
    if(arr1[a]!=arr1[a+1]){
        array1.push(arr1[a])
    }
}
for(var a=0;a<arr1.length;a++){
    if(arr2[a]!=arr2[a+1]){
        array2.push(arr2[a])
    }
}
for(b=0;b<array1.length;b++){
    for(c=0;c<array2.length;c++){
        if(array1[b]==array2[c]){
            count++;
        }
    }
} console.log(count)

}
}
if (process.env.USERNAME === 'haris') {
runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`);
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

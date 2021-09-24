function runProgram(input) {
    input = input.trim().split("\n")
var N = Number(input[0])
var arr = input[1].trim().split(" ").map(Number)
//console.log(N,arr)
var array =[];
var sum = 0;
for(i=0;i<arr.length;i++){
 if(arr[i]>arr[i+1]){
   array.push(arr[i]);
              }else{
     array.push(arr[i+1]);
   }

   console.log(array)
}for(j=0;j<array.length;j++){
 sum += array[j];
}console.log(sum);

}

if (process.env.USERNAME === "haris") {
runProgram(`2
1 3 1 2`);
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
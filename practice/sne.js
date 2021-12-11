function runProgram(input) {
 input = input.trim().split("\n");
 let size = +input[0];
 let arr = input[1].trim().split(" ").map(Number);
let sne = [];


for(let i=0;i<arr.length;i++){
    let count = arr.length-i
   for(let j=i+1;j<arr.length;j++){
       if(arr[i]>arr[j]){
           count--;
           break;
       }
   }

if(count == arr.length-i){
sne.push(arr[i])
}

} console.log(sne.length)
}

if (process.env.USERNAME === 'haris') {
  runProgram(`5
  4 2 1 3 7`);
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

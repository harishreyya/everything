
 

function runProgram(input) {
 input = input.trim().split("\n")
let test = +input[0];
let arr = input[1].trim().split(" ").map(Number);
//console.log(test,arr)
let even_sum = 0;
let odd_sum = 0;
for(let i=0;i<arr.length;i++){
    if((arr[i]%2)===0){
        even_sum = even_sum + arr[i]
    }
}
for(let i=0;i<arr.length;i++){
    if((arr[i]%2)===1){
        odd_sum = odd_sum + arr[i]
    }
}
let res = (2 * even_sum) + (3 * odd_sum)
console.log(res)
}

if (process.env.USERNAME === 'haris') {
  runProgram(`5
  1 2 3 4 5`);
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
//A * (X) + B * (Y) = Z
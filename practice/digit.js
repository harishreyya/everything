 

function sumOfDigits(number){
   var sum = 0
    while(number > 0){
           sum += (number % 10);
           number = number/10;
       }
       return sum;
    }
function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0]
    var line =1;
    for(a=0;a<test;a++){
        var N = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number);
        var ans = []
        for (i = 0;i<N;i++){
             ans[i] = sumOfDigits(arr[i])
        }
        return ans;
        

function sumOfDigits(number){
    var sum = 0
     while(number > 0){
            sum += (n % 10);
            n = n/10;
        }
        return sum;
        console.log(sum);
     }
        
    }
 
}

if (process.env.USERNAME === 'haris') {
  runProgram(`2
  5
  12 14 16 17 29
  6
  1 2 3 4 5 51`);
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

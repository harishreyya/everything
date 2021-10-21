function suchPairReturns(array,k){
   
  var  left = 0
  var  right = array.length - 1
    while(left < right){
          var  sum = array[left] + array[right]
            if (sum == k){ 
                return 1;
            }else if (sum > k){
                 right--;
            }else{
                    left++
            }
    }
    return -1
}

function runProgram(input) {
 input = input.trim().split("\n");
 var test = 1;
 var line =1;
 for(i=0;i<test;i++){
 var [N,k] =  input[line++].trim().split(" ").map(Number);
 var array = input[line++].trim().split(" ").map(Number).sort();

console.log(suchPairReturns(array,k))
 }
}

if (process.env.USERNAME === 'haris') {
  runProgram(`1
  5 2
  3 4 0 2 7`);
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


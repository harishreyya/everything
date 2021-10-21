
function twoSum(array,k){
    left = 0;
    right = array.length - 1;
    while(left < right){
          var  sum = array[left] + array[right];
            if (sum == k){
         return {left, right}; 
 
             
           } else if (sum > k){
               
            right--;
           } else{
                    left++;
            }
    }
    return -1 ;
   
  }
  
  
  
  
  
  function runProgram(input) {
  input = input.trim().split("\n");
  var test = +input[0];
  var line = 1;
  for(a=0;a<test;a++){
    var [size,k] = input[line++].trim().split(" ").map(Number);
    var array =  input[line++].trim().split(" ").map(Number);
 console.log(twoSum(array,k)) ; 
  }
  
  }
  
  if (process.env.USERNAME === 'haris') {
  runProgram(`3
  4 9
  2 7 11 15
  5 10
  1 2 3 5 5
  2 100
  48 49`);
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
  
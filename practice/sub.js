
function runProgram(input) {
 input = input.trim().split("\n");
 var size = +input[0];
 var arr =  input[1].trim().split(" ").map(Number);
 var k = +input[2];
var count =0;
 for(i=0;i<arr.length;i++){
     for(j=0;j<arr.length;j++){
       if(arr[i]+arr[j]== k){
        count++;
        
          
       }
     }
 }if(count==1){
     console.log("Yes")
 }else{
    console.log("No")
 }




 //console.log(size,arr,k)
}

if (process.env.USERNAME === 'haris') {
  runProgram(`9
  1 2 3 4 5 6 7 8 9
  5`);
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


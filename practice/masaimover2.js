
function runProgram(input) {
 input = input.trim().split("\n");
 let [target,n] = input[0].trim().split(" ").map(Number);
 let arr = input[1].trim().split(" ").map(Number);
 let max = -Infinity
 let min = Infinity

 masaimovers(target,0,0)

 function masaimovers(target,way,count){
    if(target < way){
        return;
    }
    if(target == way){
        max = Math.max(max,count)
       min = Math.min(min,count)
    }
    for(let i=0;i<n;i++){
        masaimovers(target,way+arr[i],count+1)
     
    }

  }
if(max!= -Infinity||min!=Infinity){
    console.log(min,max)  
}else{
    console.log("-1")
}
}

if (process.env.USERNAME === 'haris') {
  runProgram(`3 3
  1 2 3`);
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


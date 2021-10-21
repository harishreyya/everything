function lengthRec(str,i,count){
    if(i== str.length){
        console.log(count);
        return;
    }else{
     
     lengthRec(str,i+1,count+1)
     return;
    }
}



function runProgram(input) {
 input = input.trim().split("\n");
 var str = input[0].trim().split("");
 lengthRec(str,i=0,count=0)
 //console.log(str)
}

if (process.env.USERNAME === 'haris') {
  runProgram(`masaischool`);
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

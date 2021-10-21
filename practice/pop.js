function runProgram(input) {
 input = input.trim().split("\n")
 var str =  input[0].trim().split("")

var arr = [];


 for(i=0;i<str.length;i++){
     if(str[i]!=str[i+2]&&str[i]==str[i+1]){
     arr.push(str[i]) 
   
     }
     
   
    }
console.log(arr)
}

if (process.env.USERNAME === 'haris') {
  runProgram(`aaabccddd`);
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

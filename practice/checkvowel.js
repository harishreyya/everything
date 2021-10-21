
function runProgram(input) {
 var input = input.trim().split("\n");
 var size = +input[0];
 var str = input[1].trim().split("");
 for(i=0;i<str.length;i++){
 if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
         console.log("True")
         
     }else{
         console.log("False");
         
     }
 }
}

if (process.env.USERNAME === 'haris') {
  runProgram(``);
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


function runProgram(input) {
input = input.trim().split("\n");
var bsize = +input[0]
var bstr = input[1].trim().split("")
var csize = +input[2]
var cstr = input[3].trim().split("")

for (i=0;i<bstr.length;i++){

}
for (j=0;j<cstr.length;j++){

} if(bstr[i]==cstr[j]){
    console.log("Yes")
}else{
    console.log("No")
}

}

if (process.env.USERNAME === 'haris') {
  runProgram(`5
  aabbc
  3
  abc`);
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

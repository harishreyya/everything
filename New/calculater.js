function runProgram(input) {
input = input.trim().split("\n");
var n = Number(input[0]);
var arr = input[1].trim().split(" ").map(Number);
var count = 0;
var count1 = 0;
for(i=0;i<arr.length;i++){
    if(arr[i]== 1){
count++;
    }else if(arr[i]==0){
        count1++;
    }
}if (count>count1){
    console.log("tom");
}else if(count<count1){
    console.log("jerry");
}else if(count == count1){
    console.log("Another round")
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










  


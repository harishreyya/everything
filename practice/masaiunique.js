function runProgram(input) {
    input = input.trim().split("\n");
    let str = input[0].trim().split("");
   
    let new_str = []
    for(i=0;i<str.length;i++){
       for(j=i+1;j<str.length;j++){
           if(str[i]===str[j]){
               new_str.push(str[i])
           }
       }
}
if(new_str.length === 0){
    console.log( "Unique")
}else{
    console.log("No")
}
}

if (process.env.USERNAME === 'haris') {
  runProgram(`masi`);
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
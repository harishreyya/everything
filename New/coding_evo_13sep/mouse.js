

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;
    for(i=0;i<test;i++){
     var size = +input[line++]
     var string = input[line++].trim().split("");
     //console.log(test,size, string)
     var count = 0;
     for(a=0;a<string.length;a++){
         var substr = "";
        for(b=a;b<string.length;b++){
            if(substr.length === 5){
    substr += string[b];
             } if(substr === "mouse"){
        count++;
    }
        }
     }console.log(count);
}
}
if (process.env.USERNAME === 'haris') {
  runProgram(`2
  7
  mousems
  8
  wimousee`);
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

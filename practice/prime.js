

function runProgram(input) {
    input = input.split('\n')
    var test = Number(input[0])
    var sum = 0;

    for(i =0; i<input.length;i++){

        sum = sum +i;
    }if(sum>100){
        console.log("Greater");
    }else{
        console.log("Lesser")
    }
}

if (process.env.USERNAME === 'haris') {
  runProgram(`5
  21 24 2 54 8`);
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


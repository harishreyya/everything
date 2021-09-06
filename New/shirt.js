function runProgram(input){
    var newInput = input.split(" ");
    var A = Number(newInput[0]);
    var B = Number(newInput[1]);
    var C = Number(newInput[2]);
    var D = Number(newInput[3]);
    var E = Number(newInput[4]);
    var F = Number(newInput[5]);

    var power = A+(2*B)+(3*C)+(3*D)+(2*E)+(2*F);
    console.log(power);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
   read += input;
});
process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
});

process.on("SIGINT", function () {
   read = read.replace(/\n$/,"")
   runProgram(read);
   process.exit(0);
});


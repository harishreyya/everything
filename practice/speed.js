function runProgram(input){
    var newInput = input.split(" ");
    var distance = Number(newInput[0]);
    var time= Number(newInput[1]);
    if(distance/time > 40){
        console.log("Apply Brake")
    }else{
        console.log("Keep going")
    }
    
   
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


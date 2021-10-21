
function runProgram(input){
    var newInput = input.split(" ");
    var a = Number(newInput[0]);
    var b = Number(newInput[1]);
    var c = Number(newInput[2]);
    var d = Number(newInput[3]);
   
    if(a>b && c>d){
        console.log("India")
    } else if(a<b && c<d){
        console.log("Australia")
    }else if(a==b & c==d){
        console.log("Play another game!")
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


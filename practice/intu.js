function runProgram(input){
    var newInput = input.split(" ");
    var a = Number(newInput[0]);
    var b = Number(newInput[1]);
    if((a%2==0)&&(b%2==0)){
        console.log("Even")
    }else if((a%2==1)&&(b%2==1)){
        console.log("Odd")
    }else{
        console.log("Even-Odd")
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


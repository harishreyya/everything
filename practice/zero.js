function numberofways(N){
    if((N===0)||(N===1)){
        return 1;
    }else if(N===2){
        return 2;
    }else if(N===4){
        return 5;
    }else{
        return numberofways(N-5) + numberofways(N-2) + numberofways(N-1);
    }

}


function runProgram(input) {
 input = input.trim().split("\n");
 let test = +input[0];
 let line = 1;
 for(i=0;i< test;i++){
     let N = +input[line++];
     console.log( numberofways(N))
 }
}

if (process.env.USERNAME === 'haris') {
  runProgram(`1
  4`);
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

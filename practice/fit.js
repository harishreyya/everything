function runProgram(input) {
 input = input.trim().split("\n");
 let test = +input[0];
 let line = 1;
 for(i=0;i<test;i++){
     let Q_no = +input[line++];
     let arr = input[line++].trim().split(" ").map(Number).sort((a,b) => a -b);


     //console.log(test,Q_no,arr)
//console.log(arr[arr.length-1])
     for(a=0;a<arr.length;a++){
         if(arr[0] > Q_no){
             console.log("Front " + arr[0])
             break;
         }else if(arr[arr.length-1] < Q_no){
             console.log(arr[arr.length-1] + " Last" )
             break;
         }else if(arr[a]< Q_no && arr[a+1]> Q_no){
             console.log(arr[a] , arr[a+1])
             break;
         }
         }
     }
 }


if (process.env.USERNAME === 'haris') {
  runProgram(`3
  7
  1 4 5 10 8 9
  5 
  1 2 6 7 8
  7
  2 3 4 5 6`);
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



 

function runProgram(input) {
 input = input.trim().split("\n");
 var test = +input[0];
 var arr_1 = [];
 var line = 1;
 for(i=0;i<test;i++){
     var arr = input[line++].trim().split(" ");
  // console.log(arr)
  
  if(arr[0] === 'E'){
      arr_1.push(arr[1])
      console.log(arr_1.length);

  }else if((arr[0]==="D") && ( arr_1.length===0)){
      console.log("-1",arr_1.length);
  }else if(arr[0]==="D"){
      console.log(arr_1.shift(),arr_1.length);
  }
 }

}

if (process.env.USERNAME === 'haris') {
  runProgram(`5
  E 2
  D
  D
  E 3
  D`);
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

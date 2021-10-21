
function runProgram(input) {
input = input.trim().split("\n");
var size = +input[0];
var str = input[1].trim().split("")
var obj = {};
for(i=0;i<str.length;i++){
  if(obj[str[i]] === undefined){
   // obj[str[i]]  ===1;
    //console.log(obj);
  }else{
   // var pv = obj[str[i]]
   // obj[str[i]]= pv + 1;
    //console.log(obj);
  }
}for ( aman in obj){
  console.log(obj[aman])
}
   }




if (process.env.USERNAME === 'haris') {
  runProgram(`4
  aman`);
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



//var len = input.length
//var palindrome = " ";
//for(var i = 0; i < len; i++) {
   // if(input[i] !== input[len - 1 - i]) {
       // console.log("No");
      
    //} else {
       // console.log("Yes"); 


    //}
    //}
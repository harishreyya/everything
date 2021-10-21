
function runProgram(input) {
 var str = input;
var obj={};
var res;
for(i=0;i<str.length;i++){
obj[str[i]]=undefined;
obj[str[i]]=str[i];
}
res = Object.keys(obj)



var arr =[];
for(j=0;j<res.length;j++){
    if(res[j]==" "){
        
    }else{
        arr.push(res[j]);
    }
}
console.log(arr.join(""))

}

if (process.env.USERNAME === 'haris') {
  runProgram(`my name is ankush`);
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


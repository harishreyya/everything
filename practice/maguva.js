function go(arr){
  var obj ={};
  for(j=0;j<arr.length;j++){
    if(obj[arr[j]] == undefined){
      obj[arr[j]] = 1;
    }else{
      obj[arr[k]]+=1;
    }
  }
  for(key in obj){
    if(obj[key]==1){
      return key;
    }
  }
}

function runProgram(input) {
    input = input.trim().split("\n")
    var test = +input[0]
    var line = 1;
    for (i=0;i<test;i++){
        var size = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
      var one = go(arr);
      console.log(one)
        
      }

}


if (process.env.USERNAME === 'haris') {
  runProgram(`1
  5
  1 2 1 3 4 4 5 2 3`);
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
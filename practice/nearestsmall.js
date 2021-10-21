function nearestsmaller(arr){
    var new_arr = [];
    for(j=0;j<arr.length;j++){
        var flag = false;
        for(k=j-1;k>=0;k--){
            if(arr[j]>arr[k]){
                new_arr.push(arr[k]);
                flag =true;
                break;
            }
        }if(flag===false){
         new_arr.push("-1")
        }
    }
    return new_arr;
}
 

function runProgram(input) {
 input = input.trim().split('\n');
 var test = +input[0];
 var line = 1;
 for(i=0;i< test ;i++){
     var size = +input[line++];
     var arr = input[line++].trim().split(" ").map(Number);
     //console.log(size,arr);
    console.log(nearestsmaller(arr).join(" "))
 }
}

if (process.env.USERNAME === 'haris') {
  runProgram(`1
  8
  39 27 11 4 24 32 32 1`);
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

 

function runProgram(input) {
 input = input.trim().split("\n");
 var test = +input[0];
 var line = 1;
 for(i=0;i<test;i++){
     var [length, K] = input[line++].trim().split(" ").map(Number);
     var arr = input[line++].trim().split(" ").map(Number);
     var array = [];
     var count = 0;
for(a=arr.length-1;a>=0;a--){
    array.push(arr[a]);
}
    for(b=0;b<array.length;b++){
        for(c=b+1;c<array.length;c++){
            if((array[b]!=array[c])&& (array[b]-array[c] == K)){
                count++;
                
            }
        }
    }
if(count == 1){
    console.log("Yes")
}else{
    console.log("No")
}
}
}

if (process.env.USERNAME === 'haris') {
  runProgram(`2
  5 3
  1 2 3 4 5
  5 8
  1 2 3 4 5 `);
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

 

function runProgram(input) {
    input =input.trim().split("\n");
    var test = +input[0];
    var line =1;
    for (i=0;i<test;i++){
        var [length, product] = input[line++].trim().split(" ").map(Number);

        var arr= input[line++].trim().split(" ").map(Number);
   
      //  console.log(test,length,product,arr)
  var count =0;
    for(j=0;j<arr.length;j++){
        if(arr[j]==arr[j+1]){
        if((arr[j] * arr[j+1]) == product);
          count++;
         

        }
    }console.log(count)
    }
 
}

if (process.env.USERNAME === 'haris') {
  runProgram(`2
  3 0
  1 3 2
  5 4
  3 2 2 1 5
  `);
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

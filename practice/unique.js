
 

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
 
    var line = 1;
    for(i=0;i<test;i++){
        var str = input[line++].trim().split("");
      var queue = [[str[0],1]];
      var front = 0;
      let output = str[0];
      for(j=1;j<str.length;j++){
          let k = 0;
          let flag = 1;
          while(k<queue.length){
              if(str[j]===queue[k][0]){
                  flag=0;
                  queue[k][1]+=1;
                  break;
              }
              k++;
          }
          if(flag){
              queue.push([str[j],1])
          }
          while(front < queue.length && queue[front][1] > 1){
              front++;
          }
          if(front === queue.length){
              output+="#";
          }else{
              output+= queue[front][0];
          }
      }console.log(output)
     
    
    }
   
}

if (process.env.USERNAME === 'haris') {
  runProgram(`2
  abadbc
  abcabc`);
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

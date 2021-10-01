
function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line =1;
    for(i=0;i<test;i++){
        var[N,K,X] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);
        //console.log(N,K,X,arr)
    var count =0;
        for(j=0;j<arr.length;j++){
            var subarr = [];
            for(var k=j;k<j.length;k++){
                subarr.push(arr[k]);
            } } for(a=0;a<subarr.length;a++){
                if((subarr.length == X)&&(subarr[a] <= K)){
                    
                
            
                  console.log(subarr);
    }
    }
}
}

    if (process.env.USERNAME === 'haris') {
      runProgram(`1
      5 3 2
      1 3 2 5 1`);
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
    
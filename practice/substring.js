function runProgram(input) {
    var count=0;
    var a=input.trim().split("");

    for (var i=0; i<a.length; i++) {
      
      for (var j= i; j<a.length; j++) {
        var str="";
        for(var k=i; k<=j; k++) {
          str += a[k]
        
        }
        str =str.trim().split("");
         var count;
         var length=str.length;
        if(length ==1){
          count++;
         
        }
          else if(str[0]==str[length-1]){
            count++
          }
        }
        
      
    }
     
    console.log(count);
   
  }


  if (process.env.USERNAME === 'haris') {
    runProgram(`a3b2`);
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
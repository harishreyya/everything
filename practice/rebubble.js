function runProgram(input) {
    input = input.trim().split("\n")
    var size = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    Bubble(arr)
  
  }
  function Bubble(arr) {
      if(arr.length === 1) 
          return;


          for( i = 0; i < arr.length - 1; i++){
              for( j = 0; j < arr.length - i - 1; j++){
                  if(arr[j] > arr[j+1]){
                      let temp = arr[j];
                      arr[j] = arr[j+1];
                      arr[j+1] = temp;
                    
                  }
              }
            

              
          }
          console.log(arr.join(" "))
  }
  
  if (process.env.USERNAME === 'haris') {
    runProgram(`5
    3 5 0 9 8`);
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
 
 /* function runProgram(input) {
    input = input.trim().split("\n");
    var size = +input[0];
   var arr = input[1].trim().split(" ").map(Number);
  var arr1 = [];
   for(i=0;i<arr.length;i++){
      if(arr[i+1]>arr[i]){
        arr1.push(arr[i]);
       
       }
    } arr1.push(arr[arr.length-1]);
     console.log(arr1);
    }
    
    if (process.env.USERNAME === 'haris') {
    runProgram(`10
    1 2 4 3 5 7 8 6 9 10`);
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
    */

    function runProgram(input) {
        input = input.trim().split("\n")
        var N = Number(input[0])
        var arr = input[1].trim().split(" ").map(Number)
         var j=1;
   var arr1=[];
         for(i =1;i<N;i++){
             if(arr[j-1]<=arr[i]){
                 arr[j]=arr[i];
                 j++;
             }
         }
         for(i=0;i<j;i++){
          arr1.push(arr[i]);
         }
         console.log(arr1.join(" "))
      }
      
      
      if (process.env.USERNAME === "haris") {
        runProgram(`10
        1 2 4 3 5 7 8 6 9 10`);
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
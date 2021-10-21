function commonIndexofArray(arr1,arr2){
      var  first = 0;
       var second = 0;
       var ans = [];
        while(first < arr1.length && second < arr2.length){
            if (arr1[first] == arr2[second]){
                ans.push(arr1[first]);
                first++;
                second++;
            }else if (arr1[first] > arr2[second]) {
                second++;
              
            }
            else{
                first++;
              
              
            }
        }
       
      return ans.join(" ") 
     
        
    }
function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;
    for(i=0;i<test;i++){
        var N1 = +input[line++]
        var arr1 = input[line++].trim().split(" ").map(Number);
        var N2 = +input[line++]
        var arr2 = input[line++].trim().split(" ").map(Number);
    
  console.log(commonIndexofArray(arr1,arr2));
       
   }
   }
   
   if (process.env.USERNAME === 'haris') {
     runProgram(`2
     6
     1 2 3 4 5 6
     3
     3 3 5
     4 
     1 2 3 4
     4 
     5 6 7 8`);
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
   
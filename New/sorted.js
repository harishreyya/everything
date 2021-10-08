function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;
    for(i=0;i<test;i++){
      var size =  +input[line++];
      var arr1 = input[line++].trim().split(" ").map(Number).sort();
      var arr2 = input[line++].trim().split(" ").map(Number).sort();
   var array1 = [];
   var array2 = [];
   var out = [];
     //console.log(test,size ,arr1,arr2)
    for(a=0;a<arr1.length;a++){
        if(arr1[a]!=arr1[a+1]){
            array1.push(arr1[a])
        }
    }
    
    for(b=0;b<arr2.length;b++){
        if(arr2[b]!=arr2[b+1]){
            array2.push(arr2[b])
        }
        
    }//console.log(array1,array2)
    for(j=0;j<array1.length;j++){
        for(k=0;k<array2.length;k++){
            if(array1[j]==array2[k]){
                out.push(array1[j])
            }
        }
    }console.log(out.length)
    }
   }
   
   if (process.env.USERNAME === 'haris') {
     runProgram(`1
     6
     1 2 2 3 4 5
     4 4 3 2 1 1`);
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
   
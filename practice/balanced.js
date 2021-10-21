function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;
    for(i=0;i<test;i++){
        var str =   input[line++].trim().split("");
        //console.log(str)
  console.log(checkbalanced(str))
       
    }
}
    function checkbalanced(str){
      var  left = 0
      var  right = str.length - 1
     
      while(left < right){
          if (str[left] != str[right]){

          return false
           } left++
          right--
      }
      return true
   
    }
   
   
   if (process.env.USERNAME === 'haris') {
     runProgram(`3
     {([])}
     ()
     ([]
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
   
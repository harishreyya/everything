

function runProgram(input) {
  var string = input.split("");

  var ans = 1;
  var count = 1
  for(i=0;i<string.length;i++){
      if(string[i]==string[i-1]){
        count++;
      }else {
         count = Math.max(count,ans)
           count = 1;
      }
          
      } count = math.max(count,ans)
       connsole.log(count);
 
  }
   


if (process.env.USERNAME === 'haris') {
 runProgram(`ATTCGGGA`);
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

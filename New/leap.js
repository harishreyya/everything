function palindrome(str) {
  var mid = Math.floor(str.length/2);
  for(var i = 0; i < mid; i++) {
      if(str[i] !== str[str.length - 1 - i]) {
          return false;
      }
  }
  return true;
}
  function largesstic(c) {
      var greater = c[0];
      for(var i = 0; i < c.length; i++) {
          if(c[i] > greater) {
              greater = c[i];
          }
          
      }
      return greater;
  }

function runProgram(input) {
var arr  = input.trim().split(" ")
var c = [];
for(var i = 0; i < arr.length; i++) {
  for(var j = i + 1; j < arr.length; j++) {
      var sub_str = " ";
      for(var k = i; k <= j; k++) {
          sub_str = sub_str + arr[k];

      }
      var output = palindrome(sub_str);
      if(output = true) {
          c.push(sub_str.length)
      }
  }

console.log(greater);
}
}

if (process.env.USERNAME === 'haris') {
runProgram(`thisracecarisgood`);
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
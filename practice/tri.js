function validtriangle( a, b , c){
    if(a<(b+c)&&b<(a+c)&&c<(b+a)){
        return true;
    }
    return false;
    }
function runProgram(input){
    var arr = input.split("\n");
    console.log(arr);
    var cases = Number(arr[0]);
    for(i=1;i<=cases;i++){
        var sides = arr[i].split(" ").map(Number);
        var valid = validtriangle(sides[0],sides[1],sides[2]);
        if(valid){
            console.log("Yes");
        } else{
            console.log("No");
        }
        }
    }



if (process.env.USERNAME === 'haris') {
  runProgram(`4\n4 5 13\n7 1 8\n2 5 4\n2 2 2`);
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

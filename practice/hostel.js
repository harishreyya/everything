function runProgram(input) {
    input = input.trim().split("\n")
    let size = +input[0]
    let arr = input[1].trim().split(" ").map(Number).sort((a,b)=> a-b);
    let arr1 = input[2].trim().split(" ").map(Number).sort((a,b)=> a-b);  

    let res = [];

    let i = 0;
    
    while((i<arr.length)&&(i<arr1.length)){
        if(arr[i] == arr1[i]){
            res.push(0)
        }else if(arr[i] != arr1[i]){
            res.push(Math.abs(arr[i]-arr1[i]))
        }
        i++;
     

    }
    res.sort((a,b)=> a-b)

 
console.log(res[res.length-1])
}

if (process.env.USERNAME === 'haris') {
  runProgram(`3
  4 -4 2
  4 0 5`);
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


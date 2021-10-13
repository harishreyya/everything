
 

function runProgram(input) {
 input = input.trim().split("\n");

 
 var [row,col] = input[0].trim().split(" ").map(Number);
var line = 1
 var arr = [];
 for(i=0;i<row;i++){
 arr.push(input[line++].trim().split(" ").map(Number));
 }
 var mat =[]
//console.log(row,col,arr)
for(i=0;i<row;i++){
    for(j=0;j<col;j++){
    /*if(arr[i][j]=== '0'){
        arr[i][j]===arr[j][i];
        arr[j][i]=== "1"

    }else if(arr[i][j]==='1'){
        arr[i][j]===arr[j][i];
        arr[j][i]==='0';
    }*/
mat.push(arr[i][j])
}
}for(i=0;i<mat.length;i++){
    if(mat[i]==='0'){
        mat[i]==='1'
        console.log(mat[i])
    }else if(mat[i]==='1'){
        mat[i]==='0'
        console.log(mat[i])
}

}
}

if (process.env.USERNAME === 'haris') {
  runProgram(`3 2
  1 0
  0 1
  1 1`);
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

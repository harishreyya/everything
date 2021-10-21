function runProgram(input) {
 input = input.trim().split("\n");
 var [i,j,N] = input[0].trim().split(" ").map(Number);

 
}

if (process.env.USERNAME === 'haris') {
  runProgram(`3 3 1`);
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
/*
`C = 0 // Count of all possible positions
Obj // Object to store the cells
N // number of moves
Board[10][10] // All cells initialised to 0

* F( i, j, N ){

    if( N == 0 ){

       if( {i,j} is not present in Obj ){
          C = C + 1
          Obj.insert({i,j})
          return
       }
    }

  if( i+2 < 10 and j+1 < 10 && Board[i+2][j+1] == 0){
     Board[i+2][j+1] = 1
     F( i+2, j+1, N-1)
     Board[i+2][j+1] = 0
  }

  // Similarly check or all other 7 possibilities.

  Print(C)

}


*/
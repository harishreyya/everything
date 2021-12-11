function dance(M_arr,N_arr) {
  let  i =0;
   let j = 0;
    while(i< M_arr.length &&  j < N_arr.length) {
if(M_arr[i] <= N_arr[j]) {
    return false;
   
}
i++;
j++;
return true;
    }
}
function runProgram(input) {
    input = input.trim().split("\n");
   let test = +input[0];
   let line = 1;
   for(i=0;i<test;i++){
   let [M,N] = input[line++].trim().split(" ").map(Number);
   let M_arr = input[line++].trim().split(" ").map(Number).sort((a,b) => (a-b));
   let N_arr = input[line++].trim().split(" ").map(Number).sort((a,b) => (a-b));

   if(dance(M_arr,N_arr) === true) {
    console.log("YES")
} else {
    console.log("NO")
}
}
}
   if (process.env.USERNAME === 'haris') {
     runProgram(`1
     4 5
     2 5 6 8
     3 8 5 1 7`);
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
function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0])
 var line = 1;
 for(let i = 0; i < testcases; i++) {
     var[N,M] = input[line++].trim().split(" ").map(Number)
    var arr = input[line++].trim().split(" ").map(Number).sort((a,b) => a-b)
     var arr1 = input[line++].trim().split(" ").map(Number).sort((a,b) => a-b)
  //  console.log(testcases,N,M,arr,arr1)
 
    if(party(arr,arr1) == true) {
        console.log("YES")
    } else {
        console.log("NO")
    }

}
}
function party(arr,arr1) {
  let  i =0; let j= 0
    while(i< arr.length &&  j < arr1.length) {
if(arr[i] <= arr1[j]) {
    return false;
   
}
i++;
j++;
return true;
    }
}
if (process.env.USERNAME === "srini") {
  runProgram(`1
  4 5
  2 5 6 8
  3 8 5 1 7`);
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
} */
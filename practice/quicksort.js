
 
function quicksort(arr,low,high){
if(low<high){
    let index = partitions(arr,low,high);
    quicksort(arr,low,index-1);
    quicksort(arr,index+1,high)
}
return arr;

}
function paritions(arr,low,high){
    let i= low,j=high, priv = arr[high];
    while(i<j){
        while(arr[j]>=priv && j>0){
            j--
        }
        while (arr[j]>=)
    }
}
function runProgram(input) {
 input = input.trim().split("\n");
 let test = +input[0];
 let arr = input[1].trim().split(" ").map(Number);

}

if (process.env.USERNAME === 'haris') {
  runProgram(`5
  2 3 1 4 5`);
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

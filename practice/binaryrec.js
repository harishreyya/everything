recursiveBinarySearch(array, low, high, element):

    if high >= low:
        middle = low + (high-low)/2

    if array[middle] == element:
            return middle

    if array[middle] > element:
        return recursiveBinarySearch(array, low, middle-1, element)

    return recursiveBinarySearch(array, middle+1, high, element)
 

function runProgram(input) {
 
}

if (process.env.USERNAME === 'haris') {
  runProgram(`5 0
  2 -2 0 3 4`);
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

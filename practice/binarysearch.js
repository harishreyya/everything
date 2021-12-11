function iterativeBinarySearch(array, element,low,high){


while (low <= high){
   let middle = (low + Math.floor((high-low)/2))

    if (array[middle] == element){
        return 1;
    }else if (array[middle] > element){
           high = middle - 1
         
    }else if( array[middle]< element){
       
      low = middle + 1 
      return -1 ;
}
}
}

function runProgram(input) {
 input = input.trim().split("\n");
 let [size,element] = input[0].trim().split(" ").map(Number);
 let array = input[1].trim().split(" ").map(Number)

 console.log(iterativeBinarySearch(array, element,0,size-1))
}

if (process.env.USERNAME === 'haris') {
  runProgram(`5 0
  2 -2 1 0 4`);
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
 input = input.trim().split("\n")
 var[N,K] = input[0].trim().split(" ").map(Number)
 var arr = input[1].trim().split(" ").map(Number)
 console.log(BinarySearch(arr,K,0,N-1))
   }

   function BinarySearch(arr,K,lo,hi) {
       while(lo <= hi) {
         var  mid = (lo + Math.floor((hi-lo) / 2));
           if(arr[mid] == K) {
               return 1;
           } else if(arr[mid] > K) {
               hi = mid-1;

           }else if(arr[mid] < K) {
               lo = mid+1;
               return -1;
           }
       }
   }
   

*/
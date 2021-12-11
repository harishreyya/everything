
function parkingSlot(K, ari, dep){
    let count = 0
    
    let i = 1
    let j = 0
     while(i < ari.length && j < dep.length ){
             if (ari[i] <= dep[j]){
                    count++;
                    i++;
                
             }else{
                j++;
                count--;   
            }
             if (count > K){
              return false;
        }
    }
     return true;

    }
function runProgram(input) {
input = input.trim().split("\n");
let K = +input[0];
let ari = input[1].trim().split(" ").map(Number)//.sort((a,b) => (a-b));
let dep = input[2].trim().split(" ").map(Number)//.sort((a,b) => (a-b));

//console.log (parkingSlot(K, ari, dep))
if( parkingSlot(K, ari, dep)=== false){
console.log("Possible")
}else{
console.log("Not Possible")   
}
}

if (process.env.USERNAME === 'haris') {
runProgram(`1
1 3 7
2 6 8`);
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


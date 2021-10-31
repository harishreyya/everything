const obj = {};
function doctorStrange(arr,num,new_arr,posi) {

    if (num == posi){
        if(obj[new_arr.join(" ")]==undefined){
            obj[new_arr.join(" ")] = 1
            console.log(new_arr.join(" "))
        }
        
        return;
    }
    if (arr.length>0){
        if(obj[new_arr.join(" ")]==undefined){
            obj[new_arr.join(" ")] = 1
            console.log(new_arr.join(" "))
        }

    }for (let i=posi;i<num;i++) {
        new_arr.push(arr[i])

        doctorStrange(arr,num,new_arr,i+1)
        new_arr.pop();
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var num = +input[0]
    var arr =  input[1].trim().split(" ").map(Number).sort((a,b)=>a-b)
  
    doctorStrange(arr, num, new_arr=[], 0)
}


if (process.env.USERNAME === "haris") {
    runProgram(`3
    1 2 2 `);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
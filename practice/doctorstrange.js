function doctorStrange(arr,num,new_arr,posi) {
    if (num == posi){
        console.log(new_arr.join(" "))
        return;
    }
    if (arr.length>0){
        console.log(new_arr.join(" "))

    }for (let i=posi;i<num;i++) {
        new_arr.push(arr[i])

        doctorStrange(arr,num,new_arr,i+1)
        new_arr.pop();
    }
}
function runProgram(input) {
    input = input.trim().split("\n");
    var num = +input[0]
    var arr = []
    for ( i = 1; i <= num; i++) {
        arr.push(i)
    }
    doctorStrange(arr, num, new_arr=[], 0)
}


if (process.env.USERNAME === "haris") {
    runProgram(`3 `);
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
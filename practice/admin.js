function runProgram(input) {
    input = input.trim().split("\n");

    var b = Number(input[0])
    var arr = []
    for (var i = 1; i <= b; i++) {
        arr.push(i)
    }
    //console.log(arr)
    console.log(b)
    strange(arr, b, newarr = [], 0)
}

function strange(arr, b, newarr, pos) {
    if (b == pos) {
        console.log(newarr.join(" "))
        return;
    }
    if (arr.length > 0) {
        console.log(newarr.join(" "))

    }

    for (var i = pos; i < b; i++) {
        newarr.push(arr[i])

        strange(arr, b, newarr, i + 1)
        newarr.pop();
    }


}




if (process.env.USERNAME === "Admin") {
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
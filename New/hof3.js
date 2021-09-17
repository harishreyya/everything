

var arr =  ["apple", "windows", "ubuntu", "cola", "system"]

var total = 0;
var length = arr.map(function(el,i){
    if(el.length%2 ==1){
        total = total +el.length
        return(el.length)
    }
})
console.log(total);
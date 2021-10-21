var numbers =  [2, 4, 5, 3, 6, 8]
function iseven(el,i){
    if((el%2==0)&&(i%2==0)){
        return true;
    }else{
        return false;
    }
}
var even_numbers = numbers.filter(iseven);
console.log(even_numbers);
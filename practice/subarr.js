function stockItUp(N,elements){
 
  var prod = 0;
  var sum = 0;
     var arr = [550, 240, 84, 159, 80, 160, 252]
    for( i = 0; i < arr.length; i++) {
    
    
  for( i = 0; i < elements.length; i++) {
 
  prod = elements[i]*arr[i];
    sum = sum + prod;
  }
  console.log(sum * N);
  }
}
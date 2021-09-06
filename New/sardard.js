var lim = 30;
sum = 0;
for ( var i = 0;i <= lim;i++){
    if(i%3==0){
    sum = sum + i;
}

}
console.log(sum);



var score = [20,24,30,12,20];
var low = score[0];
for(i=0;i<=score.length;i++){
    if(score[i]<low){
        low = score[i];
    }
}
console.log(low);

var score = [23,24,60,12,40];
var high = score[0];
for(i=0;i<=score.length;i++){
    if(score[i]>high){
        high = score[i];
    }
}
console.log(high);

var animal = ["cow", "dog" ,"pig","hen","cat"];
var vowel = 0;
for(i=0;i<animal.length;i++){
    var anim = animal[i];
    for( var j = 0 ; j < anim.length ; j++){
        if((anim[j]=="a")||(anim[j]=="e")||(anim[j]=="i")||(anim[j]=="o")||(anim[j]=="u")){
         vowel++

         }
    }
}
console.log(vowel);

var animal = ["cow", "dog" ,"pig","hen","cat"];
var consonent = 0;
for(i=0;i<animal.length;i++){
    var anim = animal[i];
    for( var j = 0 ; j < anim.length ; j++){
        if((anim[j]!="a")&&(anim[j]!="e")&&(anim[j]!="i")&&(anim[j]!="o")&&(anim[j]!="u")){
         consonent++

         }
    }
}
console.log(consonent);

var a = 17;
var p = true;
if (a>1){
    for(i=2;i< a; i++){
        if(a%i==0){
            p = false;
 } else if (a==1){
     console.log("1 is not prime");    
 }
    }
}if (p){
    console.log("prime number");
}else{
    console.log(" not prime number");
}


var s = 20;

var sum = 0;
var sum2 = 0;

for(i=0;i<=s;i++){
    if(i%2==0){
    sum = sum+ i;
}
}
console.log(sum);
for(j=0;j<=s;j++){
    if(j%2==1){
    sum2 = sum +j;
}
}
console.log(sum2);

var a = 4;
var i = 2;
var p = true;
while(i<a){
     if((a%i)==0){
         p= false;
         
     }i++;{
     
     }if(p){
         console.log("prime number");
    break;
    }else{
        console.log(" not prime number");
        break;
    }
}
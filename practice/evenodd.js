var limit = 10;
for(i = 0; i <=limit; i++) {
    console.log("Masai School");
}

var lim = 100;
sum = 0;
for ( var i = 0;i <= lim;i++){
    if(i%3==0){
    sum = sum + i;
}

}
console.log(sum);

var loop = 3;

for (var i = 1; i <= loop; i++){
    for( var j = 1; j<=i;j++){
        console.log(i + "." + j)
    }
}

var score = [29, 12, 9, 38, 90, 18, 30];
var low = score[0];
for (i=0;i<=score.length;i++){
    if(score[i]< low){
    low = score[i];
}
}
console.log(low);

var names = ["aman", "albert","dhaval","swanand","pradeep"];
var conso = 0;
for( var i = 0; i< names.length;i++){
    var name = names[i];
    for(var j= 0;j< name.length;j++){
        if ((name[j]!="a")&&(name[j]!="e")&&(name[j]!="i")&&(name[j]!="o")&&(name[j]!="u")){
            conso++
        }

    }
}

console.log(conso);

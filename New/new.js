var a = 3;
var b = 4;

if (a > b) {
    console.log("B IS SMALLER");
} else if(a < b) {
        console.log("A IS SMALLER");
}

var p1 = "you";
var p2 = "we";

if (p1 != p2) {
    console.log("WRONG PASSWORD");
}

var odd = 3

if (odd%2==1){
    console.log("ODD NUMBER");
}

var year = 1996;
var age = 2021-year;

if ((age) >= 20 && (age) <= 29) {
    console.log("TWENTIES");
}

var a = 32;
var b = 19;
var c = 20;

if((a>c)&&(a>b)) {
   if(b>c) {
        console.log("a b c");
    }else{
        console.log("a c b");
    }
}else if((b>c)&&(b>a)) {
     if(a>c) {
        console.log("b a c");
    }else {
        console.log("b c a");
    }
}else if((c>a)&&(c>b)) {
     if(b>a) {
        console.log("c b a");
    }else {
        console.log("c a b");
    }
}

 var x = 3;
 var y = 4;

 (x<y)? console.log("yes"):console.log("no");

 var day = "monday"

switch (day) {
    case "sunday":
        console.log("sun");
        break;
    case "monday":
        console.log("mon");
        break;
    case "tuesday":
        console.log("tue");
        break;
    case "wednesday":
        console.log("wed");
        break;
     case "thursday":
        console.log("thur");
         break;
    case "friday":
        console.log("fri");
        break;
    case "saturday":
        console.log("sat");
        break;
    default:
        console.log("none");
        break;
}

var day = "tuesday"

switch (day) {
    case "sunday":
        console.log("sun");
        break;
    case "monday":
        console.log("mon");
        break;
    case "tuesday":
        console.log("tue");
        break;
    case "wednesday":
        console.log("wed");
        break;
     case "thursday":
        console.log("thur");
         break;
    case "friday":
        console.log("fri");
        break;
    case "saturday":
        console.log("sat");
        break;
    default:
        console.log("none");
        break;
}

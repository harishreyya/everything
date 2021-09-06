var n = 231;
var ns = n.toString();
var output=0;

for(i=0;i<ns.length;i++){
    

  switch (i) {
        case 0:
              output = i+("zero")
            break;
        case 1:
            output = i +("one")
            break;
        case 2:
            output = i +("two")
            break;
         case 3:
             output =  i +("three")
                break;
        case 4:
            output = i+("four")
            break;
        case 5:
            output = i+("five")
                break;
        case 6:
            output = i +("six")
                break;
        case 7:
            output = i +("seven")
                break;
         case 8:
            output = i+("eight")
             break;
        case 9:
            output = i +("nine")
                 break;
        default:
            output = i +("none")
            break;
    }
}
//Javascript Problems 11-20

//Eleventh Method
function firstLast6 (integers) {
    if (integers[0] == 6 || integers[integers.length - 1] == 6){
        return true;
    }else{
        return false;
    }
}
//Twelfth Method
function has23 (array) {
    if(array [0]== 3  || array[0] == 2 || array[1] == 3 || array[1] == 2){
        return true;
    }else{
        return false;
    }
}
//Thirteenth Method
function fix23 (array) {
    var extra = array;
    for(var i = 0; i < array.length; i++){
        if (array[i] == 2 && array[i+1] == 3){
            extra[i + 1] = 0
        }
    }
    return extra;
}
//Fourteenth Method
function countYZ (string){
    var count =0;
    string= string.toLowerCase();
    for( var i=0;i<string.length;i++) {
        if (string[i] == "" && (string[i - 1] == "z") || (string[i - 1] == "y")) {
            count++;
        }
    }
    if(string[string.length-1] == "y" || string[string.length-1] == "z"){
        count++;
    }
    return count;
}
//Fifteenth Method
function endOther (stringx,stringy) {
    var x = stringx.toLowerCase();
    var y = stringy.toLowerCase();
    if(x.endsWith(y) || y.endsWith(x)){
        return true;
    }else{
        return false;
    }
}
//SixteenthMethod
function starOut (string) {
    var x = '';
    for (var i = 0; i < string.length; i++){
        if (string[i] !== '*' && string[i - 1] !== '*' && string[i + 1] !== '*') {
            x += string[i];
        }
    }
    return x;
}
//Seventeenth Method
function getSandwich (bread){
    var x = " ";
    var bread1= bread.indexOf ("bread");
    var bread2= bread.lastIndexOf ("bread");
    if( bread1== -1){
        return x;
    }
    if (bread1 == bread2){
        return x;
    }
    return bread.substring(bread1 + 5, bread2);
}
//Eighteenth Method
function canBalance (array){
    var sum1=0;
    var sum2= 0;
    for(var i=0;i<array.length;i++){
        sum1 += array[i];
        for(var j=i+1; j<array.length;j++){
        sum2 += array[j];
        }
        if(sum1==sum2){
            return true;
        }
        sum2=0;
    }
    return false;
}
//Nineteenth Method
function countClumps (array){
    var x = 0
    for( var i = 0; i<array.length; i++){
        if(array[i]=== array[i+1] && array[i]!== array[i+2]){
            x++
        }
    }
    return x;
}
//Twentieth Method
function evenlySpaced (a,b,c){
var largest = a;
    if(b>a && b > c ){
        largest=b;
    }
    if(c>a && c>b){
        largest=c;
    }
    var medium = 0;
    if((a>b && c>a) || (a>c && b>a) ){
        medium=a;
    }
    if((b>a && b<c) || (b<a && c>b) ){
        medium=b;
    }
    if(c>b && a>c || (b>c && a<c)){
        medium=c;
    }
    var smallest= 0;
    if(a<b && a<c){
        smallest=a;
    }
    if(b<a && b<c){
        smallest=b;
    }
    if(c<b && c<b){
        smallest=c;
    }
    if(medium-smallest == largest-medium){
        return true;
    }
    return false;
}


function tester() {

    document.getElementById("output").innerHTML = firstLast6(true, false);
    document.getElementById("output2").innerHTML = has23(true, false);
    document.getElementById("output3").innerHTML = fix23(true, false);
    document.getElementById("output4").innerHTML = countYZ(true, false);
    document.getElementById("output5").innerHTML = endOther(true, false);
    document.getElementById("output6").innerHTML = starOut(true, false);
    document.getElementById("output7").innerHTML = getSandwich(true, false);
    document.getElementById("output8").innerHTML = canBalance(true,false);
    document.getElementById("output9").innerHTML = countClumps(true,false);
    document.getElementById("output10").innerHTML = evenlySpaced(true,false);
    //test third method, etc
}

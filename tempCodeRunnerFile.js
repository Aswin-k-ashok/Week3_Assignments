var pat=' ';
var num=1;
for(var i=1;i<=4;i++){
    for(var j=1;j<=i;j++){
        pat+=" "+ num;
        num++
    }
    console.log(pat);
    pat=' ';
    
}
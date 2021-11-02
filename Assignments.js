var word = r.question("enter a string: ");
var length = word.length;
flag=0;
 
for(i=0,j=length-1;i!=length;i++,j--){
    if(word[i]!=word[j]){
        flag=1;
        break;
    }
    else{
        flag =0;
    }
}
 
if(flag==1){
    console.log("the entered word is not a palinderome: ");
}
else{
    console.log("the enterd word is a plaindrome: ");
}

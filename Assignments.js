var pat=' ';

for(var i=1;i<=5;i++){
    for(var j=1;j<=i;j++){
        pat+= j;
    }
    console.log(pat);
    pat=' ';
}

// for(var i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         document.write(j);
//     }
//     document.write("<br>");
// }

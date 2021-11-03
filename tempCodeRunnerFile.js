var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

for(x in library){
    if(library[x].readingStatus==true){
        console.log('title:'+library[x].title+' '+'Author: '+library[x].author);
    }    
    if(library[x].readingStatus==false){
        console.log('title:'+library[x].title+' '+'Author: '+library[x].author);
    }

}
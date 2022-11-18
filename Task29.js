var library = [ 
    { author: 'Robert Mosh', title: 'The Phenix Ahead', libraryID: 1254},
    { author: 'Mark Zukherberg', title: 'Seneic goofk', libraryID: 4264},
    { author: 'Siemen solones', title: 'Hunger Games', libraryID: 3245}
    ];
 
 sorting = (obj1,obj2)=>
  {
   if (obj1.title < obj2.title){
     return -1;}
   if (obj1.title > obj2.title){
     return 1;}
   return 0;
  }
 
 console.log(library.sort(sorting));
 
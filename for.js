// JSON iterate for loops:

let book = '{"author":"sathish","pages":300,"price":2000,"title":"dsa"}';

let books =JSON.parse(book); 

let sub = Object.entries(books);

for (let i=0; i<sub.length; i++) {
    console.log(i,sub[i]);
}
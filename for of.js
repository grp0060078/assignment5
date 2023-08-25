// JSON iterate for of loops:

let book = '{"author":"sathish","pages":300,"price":2000,"title":"dsa"}';

let books =Object.values(book);

for (let value of books) {
    
    console.log(value);
}
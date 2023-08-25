// JSON iterate forEach of loops:

let book = '{"author":"sathish","pages":300,"price":2000,"title":"dsa"}';

let books =Object.values(book);

function print(value) {
    console.log(value);
}

books.forEach(print);
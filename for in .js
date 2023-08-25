// JSON iterate for in loops:


let book = {
    "author":"sathish",
    "pages":300,
    "price":2000,
    "title":"dsa"
};

for (key in book) {
    console.log(key,book[key]);
}
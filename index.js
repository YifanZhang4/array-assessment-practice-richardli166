const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
const authorsAndBooks = books.map((book) =>{
  const author = `${book.authorFirst} ${book.authorLast}`;
  return `${author} wrote ${book.name} in ${book.publishDate}`;
});
console.log(authorsAndBooks);


//Sort books from oldest to most recent
const dateSort = books.sort((a,b) => a.publishDate - b.publishDate);
console.log(dateSort);


//sort books alphabetically
const orderbooks = titles.sort();
console.log(orderbooks);


//Find who wrote War and Peace
const authorwarpeace = "War and Peace";
const findAuthor = books.find((author) => author.name === authorwarpeace);

if(authorwarpeace){
  const authorOfBook = `${findAuthor.authorFirst} ${findAuthor.authorLast}`;
  console.log(`The author of War and Peace is ${authorOfBook}.`);
}
else{
  console.log("This book doesn't exist.")
}


//how many books were written before 1900?
const before1900 = books.filter((book) => book.publishDate <1900);
const amountofbookprior1900 = before1900.length;
console.log(`Number of books written before 1900: ${amountofbookprior1900}.`);


//was there at least one book published within the last 100 years?
const currentYear = new Date().getFullYear();
const last100Years = currentYear - 100;
const books100 = books.some((book) => book.publishDate >= last100Years && book.publishDate <= currentYear);

if (books100) {
  console.log ("Yes, there is at least one book published within the last 100 years.");
}
else {
  console.log ("There are no books published within the last 100 years.");
}


//was every book published within the last 100 years?
const last100 = books.every((book) => book.publishDate >= last100Years && book.publishDate <= currentYear);

if (last100) {
  console.log ("Yes, all the books are published within the last 100 years.");
}
else {
  console.log ("No, not all the books are published within the last 100 years.");
}


//print a list of books that "includes" the genre historical
const history = books.filter((type) => type.genre.includes("historical"));
console.log(history);


//iterate over the array
books.forEach((Names) => console.log(Names.name));

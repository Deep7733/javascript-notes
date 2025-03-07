// NAME: DEEPTI RAWAT
// STUDENT NUMBER: 0866723
// COURSE:JAVASCRIPT
// DATE: 31-1-2025
// ASSIGNMENT : QUESTION 1









// Define the Book object with title, author, and yearPublished properties
function Book(title, author, yearPublished) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
}

// Define the Library object with an empty collection and methods to manage it
function Library() {
  this.books = [];

  // Method to add a book to the collection
  this.addBook = function(book) {
    this.books.push(book);
  };

  // Method to remove a book from the collection by its title
  this.removeBook = function(bookTitle) {
    this.books = this.books.filter(book => book.title !== bookTitle);
  };

  // Method to search for a book by its title
  this.searchBook = function(bookTitle) {
    const foundBook = this.books.find(book => book.title === bookTitle);
    return foundBook ? foundBook : "Book not found";
  };
}



// Example Usage:
const myLibrary = new Library();

// Adding books to the library
const book1 = new Book("Law of attraction", 2019);
const book2 = new Book("The Universe Has Your Back", 2012);
const book3 = new Book("The Power of Now", 2022);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Searching for a book
console.log(myLibrary.searchBook("2019")); // Should return the details of the book

// Removing a book by title
myLibrary.removeBook("Law of attraction");

// Searching again for the removed book
console.log(myLibrary.searchBook("law of attraction")); // Should return "Book not found"












// Library Object
const Library = {
  collection: [],  // Initialize an empty collection of books
  
  // Method to add a book to the collection
  addBook: function(book) {
    this.collection.push(book);
    console.log(`Book "${book.title}" added to the library.`);
  },
  
  // Method to remove a book from the collection by its title
  removeBook: function(bookTitle) {
    const index = this.collection.findIndex(book => book.title === bookTitle);
    if (index !== -1) {
      this.collection.splice(index, 1);
      console.log(`Book "${bookTitle}" has been removed from the library.`);
    } else {
      console.log(`Book "${bookTitle}" not found.`);
    }
  },
  
  // Method to search for a book by its title
  searchBook: function(bookTitle) {
    const book = this.collection.find(book => book.title === bookTitle);
    if (book) {
      return `Found Book: Title: "${book.title}", Author: "${book.author}", Year Published: ${book.yearPublished}`;
    } else {
      return `Book "${bookTitle}" not found.`;
    }
  }
};

// Book Object Example
const book1 = { title: "JavaScript: The Good Parts", author: "Douglas Crockford", yearPublished: 2008 };
const book2 = { title: "Clean Code", author: "Robert C. Martin", yearPublished: 2008 };
const book3 = { title: "The Pragmatic Programmer", author: "Andrew Hunt", yearPublished: 1999 };

// Sample usage of the Library object:
Library.addBook(book1);
Library.addBook(book2);
Library.addBook(book3);

console.log(Library.searchBook("Clean Code"));  // Search for Clean Code
Library.removeBook("JavaScript: The Good Parts");  // Remove a book by title
console.log(Library.searchBook("JavaScript: The Good Parts"));  // Search again to verify removal











  




  
// https://www.theodinproject.com/lessons/node-path-javascript-library
// It begins here....

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(this.title + " is by " + this.author + " and it is " + String(this.pages) + " pages long and it is " + this.read + ".")
    };
}


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'read');

const theLathe = new Book('The Lathe of Heaven', 'Ursula K. Le Guin', 185, 'being read');

const hillHouse = new Book('The Haunting of Hill House', 'Shirley Jackson', 180, 'being read');

const salemsLot = new Book("'Salem's Lot", 'Stephen King', 420, 'unread');

const orlando = new Book('Orlando', 'Virginia Woolfe', 197, 'being read');

const petSematary = new Book('Pet Sematary', 'Stephen King', 350, 'unread');

function addBookToLibrary() {
  // do stuff here
}

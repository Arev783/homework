class Book{
    #title
    #author
    #year
    #isAvailable

    constructor(title,author,year){
        this.#title=title;
        this.#author=author;
        this.#year=year;
        this.#isAvailable = true;
    }

    get title(){
        return this.#title;
    }
set title(value){
    if(value){
        this.#title = value;
    }
}
get author(){
    return this.#author;
}
set author(value){
    if(value){
        this.#author=value;
    }
}
get year(){
    return this.#year;
}
set year(value){
    if(value <=0) return;
    this.#year = value;
}
get isAvailable(){
    return this.#isAvailable;
}

borrowBook(){
    if(this.#isAvailable) {
        this.#isAvailable = false;
        return;
    }
    console.log("Its already unavailable");
}
returnBook(){
     if(!this.#isAvailable) {
        this.#isAvailable = true;
        return;
    }
    console.log("Its already available");
}
matchesTitle(word){
  return this.#title.toLowerCase().includes(word.toLowerCase());
}
getInfo(){
    return `title: ${this.title},author: ${this.author},year:${this.year}, isAvailable ${this.isAvailable}`;
}
}
class Reader{
#name
#borrowedBooks
constructor(name){
    this.#name=name;
    this.#borrowedBooks = [];
} 
get name(){
    return this.#name;
}
set name(value){
    if(typeof value !== "string" || value==="") return;
    this.#name=value;
}
get borrowedBooks(){
    return this.#borrowedBooks;
}
get borrowedBooksCount(){
    return this.#borrowedBooks.length;
}

takeBook(book){
    if(book.isAvailable){
        this.#borrowedBooks.push(book);
        book.borrowBook();
    }
}

giveBackBook(book){
    let ind = this.#borrowedBooks.findIndex(el => el === book);
    if(ind!==-1){
        this.#borrowedBooks.splice(ind,1);
book.returnBook();
    }

}

hasBook(book){
    return this.#borrowedBooks.includes(book)
}

showBorrowedBooks(){
   return this.#borrowedBooks.map(el => el.title);
}
getInfo(){
    return`${this.#name} has ${this.#borrowedBooks.length} borrowed books`;
}
}   

class Library{
    #name
    #books
    #readers

    constructor(name){
        this.#name = name;
        this.#books = [];
        this.#readers = [];
    }

    get name(){
        return this.#name;
    }
set name(value){
    if(typeof value!=="string" || value === "") return;
    this.#name = value;
}
get books(){
    return this.#books;
}
get readers(){
    return this.#readers;
}

addBook(book){
    this.#books.push(book);
}

registerReader(reader){
    this.#readers.push(reader);
}

findBookByTitle(title){
    return this.#books.find(el => el.title === title) || null;
}

findBooksByAuthor(authorName){
    return this.#books.filter(el => el.author === authorName);
}
    
giveBookToReader(title, reader){
const res = this.#books.find(el =>el.title === title);
if(res){
    reader.takeBook(res);
    return;
}
console.log("book is not found");
    }

    acceptBookFromReader(title, reader){
        const res = this.#books.find(el =>el.title === title);
        if(res){
            reader.giveBackBook(res);
            return;
        }
        console.log(" book is not found");
    }

    showAvailableBooks(){
    return this.#books
               .filter(book => book.isAvailable)
               .map(book => book.getInfo());

    }

    showAllBooks(){
        return this.#books.map(el=> el.getInfo());
    }

    getLibraryInfo(){
        return `${this.#name}: ${this.#books.length} books, ${this.#readers.length} readers`;
    }
}

const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);

const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);

library.addBook(book2);
library.addBook(book3);

library.registerReader(reader1);
library.registerReader(reader2);

console.log("=== Library info ===");
console.log(library.getLibraryInfo());

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Available books ===");
console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
library.giveBookToReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Give another book to reader ===");
library.giveBookToReader("Harry Potter", reader1);
console.log(reader1.getInfo());

console.log("=== Try to borrow same book again ===");
library.giveBookToReader("The Hobbit", reader2);

console.log("=== Return book ===");
library.acceptBookFromReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Final available books ===");
console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());
